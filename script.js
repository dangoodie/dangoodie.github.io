// Setting the variables for the terminal app

body = document.querySelector("body");

terminal = document.createElement("div");
terminal.setAttribute("id", "terminal");
body.appendChild(terminal);

terminalOutput = document.createElement("p");
terminalOutput.setAttribute("id", "terminalOutput");
terminal.appendChild(terminalOutput);

terminaInputPrefix = document.createElement("span");
terminaInputPrefix.innerHTML = "squid@dangoodie > ";
terminaInputPrefix.setAttribute("id", "terminalInputPrefix");
terminal.appendChild(terminaInputPrefix);

terminalInput = document.createElement("span");
terminalInput.setAttribute("id", "terminalInput");
terminal.appendChild(terminalInput);

terminalInputAlias = document.createElement("input");
terminalInputAlias.setAttribute("type", "text");
terminalInputAlias.setAttribute("id", "terminalInputAlias");
terminal.appendChild(terminalInputAlias);
terminalInputAlias.focus();

// create the logic for updating the innerHTML of the terminalOutput whenever the user types in the terminalInput

currentInput = "";

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
terminalInputAlias.addEventListener("keyup", updateCaret);

terminalInputAlias.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    currentInput = terminalInputAlias.value;
    handleCommand(currentInput);
    terminalInputAlias.value = "";
    terminalInput.innerHTML = terminalInputAlias.value;
    currentInput = "";

    terminalInputAlias.focus();
  }
});

// switch statement to handle the different commands that the user can input

function handleCommand(command) {
  switch (command) {
    case "help":
      terminalOutput.innerHTML += "help: list all available commands<br>";
      break;
    case "whoami":
      terminalOutput.innerHTML += "whoami: information about me<br>";
      break;
    case "projects":
      terminalOutput.innerHTML += "projects: list all projects<br>";
      break;
    case "resume":
      terminalOutput.innerHTML += "resume: display resume<br>";
      break;
    case "skills":
      terminalOutput.innerHTML += "skills: list all skills<br>";
      break;
    case "contact":
      terminalOutput.innerHTML += "contact: display contact information<br>";
      break;
    case "theme":
      terminalOutput.innerHTML += "theme: change the theme<br>";
      break;
    case "clear":
      terminalOutput.innerHTML = "";
      break;
    default:
      terminalOutput.innerHTML += command + " command not found<br>";
  }
}

// event listener for the blur event on the terminalInputAlias
terminalInputAlias.addEventListener("blur", function () {
  terminalInputAlias.focus();
});

body.addEventListener("click", function () {
  terminalInputAlias.focus();
});
