// Setting the variables for the terminal app
const body = document.querySelector("body");

const terminal = document.createElement("div");
terminal.setAttribute("id", "terminal");
body.appendChild(terminal);

const terminalOutput = document.createElement("div");
terminalOutput.setAttribute("id", "terminalOutput");
terminal.appendChild(terminalOutput);

const terminaInputPrefix = document.createElement("span");
terminaInputPrefix.innerHTML = "guest@dangoodie.github.io:~$ ";
terminaInputPrefix.setAttribute("id", "terminalInputPrefix");
terminal.appendChild(terminaInputPrefix);

const terminalInput = document.createElement("span");
terminalInput.setAttribute("id", "terminalInput");
terminal.appendChild(terminalInput);

const terminalInputAlias = document.createElement("input");
terminalInputAlias.setAttribute("type", "text");
terminalInputAlias.setAttribute("id", "terminalInputAlias");
terminal.appendChild(terminalInputAlias);
terminalInputAlias.focus();

// create the initial text for the terminalOutput
setTimeout(function () {
  loopAsciiLines(asciiArt, "", 10);
}, 100);

// create the logic for updating the innerHTML of the terminalOutput whenever the user types in the terminalInput
let currentInput = "";

function updateCaret() {
  var caretPos = terminalInputAlias.selectionStart;
  var textBeforeCaret = terminalInputAlias.value
    .substring(0, caretPos)
    .replace(/ /g, "&nbsp;");
  var caretChar = terminalInputAlias.value[caretPos] || "&nbsp;";
  var textAfterCaret = terminalInputAlias.value
    .substring(caretPos + 1)
    .replace(/ /g, "&nbsp;");
  terminalInput.innerHTML =
    textBeforeCaret +
    "<span id='caret'>" +
    caretChar +
    "</span>" +
    textAfterCaret;
}
updateCaret(); // call immediately to set the initial caret position

terminalInputAlias.addEventListener("input", updateCaret);

terminalInputAlias.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    currentInput = terminalInputAlias.value;
    handleCommand(currentInput);
    terminalInputAlias.value = "";
    terminalInput.innerHTML = terminalInputAlias.value;
    currentInput = "";

    terminalInputAlias.focus();
  }
  updateCaret();
});

// switch statement to handle the different commands that the user can input

function handleCommand(command) {
  const prefix = terminaInputPrefix.innerHTML;
  sanitisedCommand = command.toLowerCase().trim();

  switch (sanitisedCommand) {
    case "help":
      terminalOutput.innerHTML += prefix + command + "<br>";
      loopLines(helpText, "", 10);
      break;
    case "about":
      terminalOutput.innerHTML += prefix + command + "<br>";
      loopLines(aboutText, "", 10);
      break;
    case "projects":
      terminalOutput.innerHTML += prefix + command + "<br>";
      loopLines(projectsText, "", 10);
      break;
    case "resume":
      terminalOutput.innerHTML += prefix + command + "<br>";
      loopLines(["Printing resume..."], "", 10);
      setTimeout(function () {window.open("https://dangoodie.github.io/resume.pdf", "_blank");}, 1000);
      break;
    case "skills":
      terminalOutput.innerHTML += prefix + command + "<br>";
      loopLines(skillsText, "", 10);
      break;
    case "contact":
      terminalOutput.innerHTML += prefix + command + "<br>";
      loopLines(contactText, "", 10);
      break;
    case "banner":
      terminalOutput.innerHTML += prefix + command + "<br>";
      loopAsciiLines(asciiArt, "", 10);
      break;
    // case "theme":
    //   terminalOutput.innerHTML += prefix + "theme: change the theme<br>";
    //   break;
    case "clear":
      terminalOutput.innerHTML = "";
      break;
    default:
      terminalOutput.innerHTML += prefix + command + " command not found<br>";
      document.getElementById("terminal").scrollTop =
        document.getElementById("terminal").scrollHeight;
  }
}

// event listener for the blur event on the terminalInputAlias
terminalInputAlias.addEventListener("blur", function () {
  terminalInputAlias.focus();
});

body.addEventListener("click", function () {
  terminalInputAlias.focus();
});

function addAsciiLine(text, style, time) {
  const terminalOutput = document.getElementById("terminalOutput");
  const p = document.createElement("pre");
  p.className = style;
  terminalOutput.appendChild(p);

  const randomChar = () =>
    String.fromCharCode(Math.floor(Math.random() * 94) + 33);

  let index = 0;
  const typeWriter = () => {
    if (index < text.length) {
      const actualChar = text.charAt(index);
      const isSpace = actualChar === " ";
      const span = document.createElement("span");
      span.innerHTML = isSpace ? "&nbsp;" : randomChar();
      p.appendChild(span);

      // Random delay before revealing the actual character
      const revealDelay = isSpace ? 0 : Math.floor(Math.random() * time);
      setTimeout(() => {
        span.innerHTML = actualChar;
      }, revealDelay);

      index++;
      setTimeout(typeWriter, isSpace ? 0 : time);
    }
  };

  typeWriter();
}

function addLine(text, style, time) {
  var t = "";
  var next = document.createElement("pre");
  next.className = style;
  terminalOutput.appendChild(next);

  for (let i = 0; i < text.length; i++) {
    (function (i) {
      setTimeout(function () {
        if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
          t += "&nbsp;";
          i++;
        } else {
          t += text.charAt(i);
        }
        next.innerHTML = t;
        document.getElementById("terminal").scrollTop =
          document.getElementById("terminal").scrollHeight;
      }, time + 10 * i);
    })(i);
  }
}

function loopAsciiLines(name, style, time) {
  name.forEach(function (item, index) {
    addAsciiLine(item, style, index * 1 + time);
  });
}

function loopLines(name, style, time) {
  name.forEach(function (item, index) {
    addLine(item, style, index * time);
  });
}
