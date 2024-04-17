var linkedin = "https://www.linkedin.com/in/daniel-gooden/";
var github = "https://github.com/dangoodie";
var email = "dan.gooden.dev@gmail.com";
var resume = "https://drive.google.com/file/d/1" // need to fix

//get current year
const currentYear = new Date().getFullYear();

const asciiArt = [
  "© " + currentYear + " Daniel Gooden. All Rights Reserved.",
  "+-------------------------------------------------------------------------------------+",
  "|      ___           ___           ___                       ___           ___        |",
  "|     /\\  \\         /\\  \\         /\\__\\          ___        /\\  \\         /\\__\\       |",
  "|    /::\\  \\       /::\\  \\       /::|  |        /\\  \\      /::\\  \\       /:/  /       |",
  "|   /:/\\:\\  \\     /:/\\:\\  \\     /:|:|  |        \\:\\  \\    /:/\\:\\  \\     /:/  /        |",
  "|  /:/  \\:\\__\\   /::\\~\\:\\  \\   /:/|:|  |__      /::\\__\\  /::\\~\\:\\  \\   /:/  /         |",
  "| /:/__/ \\:|__| /:/\\:\\ \\:\\__\\ /:/ |:| /\\__\\  __/:/\\/__/ /:/\\:\\ \\:\\__\\ /:/__/          |",
  "| \\:\\  \\ /:/  / \\/__\\:\\/:/  / \\/__|:|/:/  / /\\/:/  /    \\:\\~\\:\\ \\/__/ \\:\\  \\          |",
  "|  \\:\\  /:/  /       \\::/  /      |:/:/  /  \\::/__/      \\:\\ \\:\\__\\    \\:\\  \\         |",
  "|   \\:\\/:/  /        /:/  /       |::/  /    \\:\\__\\       \\:\\ \\/__/     \\:\\  \\        |",
  "|    \\::/__/        /:/  /        /:/  /      \\/__/        \\:\\__\\        \\:\\__\\       |",
  "|     ~~            \\/__/         \\/__/                     \\/__/         \\/__/       |",
  "|      ___           ___           ___           ___           ___           ___      |",
  "|     /\\  \\         /\\  \\         /\\  \\         /\\  \\         /\\  \\         /\\__\\     |",
  "|    /::\\  \\       /::\\  \\       /::\\  \\       /::\\  \\       /::\\  \\       /::|  |    |",
  "|   /:/\\:\\  \\     /:/\\:\\  \\     /:/\\:\\  \\     /:/\\:\\  \\     /:/\\:\\  \\     /:|:|  |    |",
  "|  /:/  \\:\\  \\   /:/  \\:\\  \\   /:/  \\:\\  \\   /:/  \\:\\__\\   /::\\~\\:\\  \\   /:/|:|  |__  |",
  "| /:/__/_\\:\\__\\ /:/__/ \\:\\__\\ /:/__/ \\:\\__\\ /:/__/ \\:|__| /:/\\:\\ \\:\\__\\ /:/ |:| /\\__\\ |",
  "| \\:\\  /\\ \\/__/ \\:\\  \\ /:/  / \\:\\  \\ /:/  / \\:\\  \\ /:/  / \\:\\~\\:\\ \\/__/ \\/__|:|/:/  / |",
  "|  \\:\\ \\:\\__\\    \\:\\  /:/  /   \\:\\  /:/  /   \\:\\  /:/  /   \\:\\ \\:\\__\\       |:/:/  /  |",
  "|   \\:\\/:/  /     \\:\\/:/  /     \\:\\/:/  /     \\:\\/:/  /     \\:\\ \\/__/       |::/  /   |",
  "|    \\::/  /       \\::/  /       \\::/  /       \\::/__/       \\:\\__\\         /:/  /    |",
  "|     \\/__/         \\/__/         \\/__/         ~~            \\/__/         \\/__/     |",
  "+-------------------------------------------------------------------------------------+",
  "Welcome to my website.                                                                 ",
  "Please type 'help' for a list of commands.                                             ",
];

const helpText = [
  "Available commands:",
  "  help         list all available commands",
  "  about        learn more about me",
  "  projects     list all projects",
  "  skills       list all skills",
  "  resume       display resume",
  "  contact      display contact information",
  "  clear        clear the terminal",
];

const aboutText = [
  "                                                               ",
  "Hi, I'm Daniel! 🔥",
  "I'm a software engineer with a passion for technology who is studying",
  "remotely at the University of New England in Armidale, Australia.",
  "In 2010 I moved to Australia from the United States after completing",
  "high school in Texas. I have been living in Australia ever since.",
  "For many years I worked in the production industry as a ",
  "touring Lighting Director. I have worked on a variety of productions",
  "and currently work at the ABC in Sydney as the Lighting Director.",
  "I have always had a passion for technology and have been coding",
  "since I was a teenager. I am hoping in the future to transition",
  "to a career in software engineering.",
  "For now I make websites and applications in my spare time.",
  "                                                                ",
];

const symphonAI = "https://github.com/symphonAI";
const projectsText = [
  "Most of my projects are hidden because of I am studying at university. ",
  "However I did make a music recommendation powered by AI and Spotify",
  'for a hackathon called <a href="' + symphonAI + '" target="_blank">SymphonAI</a>.',
];
