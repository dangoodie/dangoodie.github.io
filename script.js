// Setting the variables for the terminal app

body = document.querySelector("body");

terminal = document.createElement("div");
terminal.setAttribute("id", "terminal");
body.appendChild(terminal);

terminalOutput = document.createElement("p");
terminalOutput.setAttribute("id", "terminalOutput");
terminal.appendChild(terminalOutput);

terminaInputPrefix = document.createElement("p");
terminaInputPrefix.innerHTML = "squid@dangoodie>";
terminaInputPrefix.setAttribute("id", "terminalInputPrefix");
terminal.appendChild(terminaInputPrefix);

terminalInput = document.createElement("input");
terminalInput.setAttribute("type", "text");
terminalInput.setAttribute("id", "terminalInput");
terminal.appendChild(terminalInput);

// create the logic for updating the innerHTML of the terminalOutput whenever the user types in the terminalInput

currentInput = "";

terminalInput.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    currentInput = terminalInput.value;
    handleCommand(currentInput);
    terminalInput.value = "";
  }
});

// switch statement to handle the different commands that the user can input

function handleCommand(command) {
  switch (command) {
    case "help":
      terminalOutput.innerHTML += "<br>help: list all available commands";
      break;
    case "whoami":
      terminalOutput.innerHTML += "<br>help: list all available commands";
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