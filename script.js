// Setting the variables for the terminal app

const body = document.querySelector("body");

const terminal = document.createElement("div");
terminal.setAttribute("id", "terminal");
body.appendChild(terminal);

const terminalOutput = document.createElement("pre");
terminalOutput.setAttribute("id", "terminalOutput");
terminal.appendChild(terminalOutput);

const terminaInputPrefix = document.createElement("span");
terminaInputPrefix.innerHTML = "visitor@dangoodie > ";
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
  loopLines(asciiArt, "", 80);
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

terminalInputAlias.addEventListener("keydown", function (event) {
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
  switch (command) {
    case "help":
      terminalOutput.innerHTML += prefix + "help: list all available commands<br>";
      break;
    case "whoami":
      terminalOutput.innerHTML += prefix + "whoami: information about me<br>";
      break;
    case "projects":
      terminalOutput.innerHTML += prefix + "projects: list all projects<br>";
      break;
    case "resume":
      terminalOutput.innerHTML += prefix + "resume: display resume<br>";
      break;
    case "skills":
      terminalOutput.innerHTML += prefix + "skills: list all skills<br>";
      break;
    case "contact":
      terminalOutput.innerHTML += prefix + "contact: display contact information<br>";
      break;
    case "theme":
      terminalOutput.innerHTML += prefix + "theme: change the theme<br>";
      break;
    case "clear":
      terminalOutput.innerHTML = "";
      break;
    default:
      terminalOutput.innerHTML += prefix + command + " command not found<br>";
  }

}

// event listener for the blur event on the terminalInputAlias
terminalInputAlias.addEventListener("blur", function () {
  terminalInputAlias.focus();
});

body.addEventListener("click", function () {
  terminalInputAlias.focus();
});

// function to add a line to the terminalOutput with a specific style and time with typing effect
function addLine(text, style, time) {
  const pre = document.createElement('pre');
  pre.style = style;
  terminalOutput.appendChild(pre);
  const increment = 10;

  for (let i = 0; i < text.length; i++) {
    setTimeout(function () {
      pre.innerHTML += text.charAt(i) === " " ? "&nbsp;" : text.charAt(i);
    }, time + i * increment);
  }
}
// function to loop through the lines of text and add them to the terminalOutput
function loopLines(lines, style, time) {
  lines.forEach((line, index) => {
    addLine(line, style, time * index);
  });
}