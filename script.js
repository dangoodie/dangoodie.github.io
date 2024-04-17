// Setting the variables for the terminal app

body = document.querySelector("body");

terminal = document.createElement("div");
terminal.setAttribute("id", "terminal");
body.appendChild(terminal);

terminalOutput = document.createElement("p");
terminalOutput.setAttribute("id", "terminalOutput");
terminal.appendChild(terminalOutput);

terminaInputPrefix = document.createElement("span");
terminaInputPrefix.innerHTML = "squid@dangoodie>";
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

terminalInputAlias.addEventListener("input", function (event) {
  terminalInput.innerHTML = terminalInputAlias.value;
});

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
      terminalOutput.innerHTML += "<br>help: list all available commands";
      break;
    case "whoami":
      terminalOutput.innerHTML += "<br>whoami: information about me";
      break;
    case "projects":
      terminalOutput.innerHTML += "<br>projects: list all projects";
      break;
    case "resume":
      terminalOutput.innerHTML += "<br>resume: display resume";
      break;
    case "skills":
      terminalOutput.innerHTML += "<br>skills: list all skills";
      break;
    case "contact":
      terminalOutput.innerHTML += "<br>contact: display contact information";
      break;
    case "theme":
      terminalOutput.innerHTML += "<br>theme: change the theme";
      break;
    case "clear":
      terminalOutput.innerHTML = "";
      break;
    default:
      terminalOutput.innerHTML += "<br>" + command + " command not found";
  }
}

// event listener for the blur event on the terminalInputAlias
terminalInputAlias.addEventListener("blur", function () {
  terminalInputAlias.focus();
});

body.addEventListener("click", function () {
  terminalInputAlias.focus();
});