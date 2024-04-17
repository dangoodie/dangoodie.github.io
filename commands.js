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
  "  ",
  "  Available commands:",
  "  help         list all available commands",
  "  about        learn more about me",
  "  projects     list all projects",
  "  skills       list all skills",
  "  contact      display contact information",
  "  clear        clear the terminal",
  "  ",
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

const projectsText = [
  "  ",
  "  symphonAI            <a href='https://github.com/symphonAI' target='_blank'>github.com/symphonAI</a>",
  "    - A music recommendation engine that uses machine learning to",
  "      recommend music based on user preferences.",
  "    - Tech stack: React , Tailwind, Go , AWS API Gateway, AWS Lambda, DynamoDB",
  "  ",
  "  Code Sydney          <a href='https://codesydney.com.au/' target='_blank'>codesydney.com.au</a>",
  "    - I am a mentor and active member of the Code Sydney community. This includes",
  "      mentoring students, attending meetups, and contributing to open source projects.",
  "  ",
  "  Prisoners AID ACT    <a href='https://www.paact.org.au/' target='_blank'>paact.org.au</a>",
  "    - A website for the non-profit organisation Prisoners Aid ACT.",
  "      I helped maintain and added features to the website as a volunteer and mentor with",
  "      Code Sydney.",
  "    - Tech stack: Next.js, AWS S3",
  "  ",
  "  Pokedex REPL         <a href='https://github.com/dangoodie/pokedex-repl' target='_blank'>github.com/dangoodie/pokedex-repl</a>",
  "    - A command line interface that allows users to search for Pokemon in regions",
  "      information using the PokeAPI.",
  "    - Tech stack: Go",
  "  ",
  "  RSS Aggregator       <a href='https://github.com/dangoodie/rss-aggregator' target='_blank'>github.com/dangoodie/rss-aggregator</a>",
  "    - A CLI application that allows users to subscribe to RSS feeds and view",
  "      the latest articles from their favourite websites.",
  "    - Tech stack: Go",
  "  ",
];

const skillsText = [
  "  ",
  "  languages:    Go, Java, Python, JavaScript, React, HTML, CSS, SQL",
  "  frameworks:   React, Node.js, Express.JS, Next.JS, Bootstrap, Tailwind, Material-UI",
  "  databases:    PostgreSQL, MongoDB",
  "  tools:        AWS, Git, GitHub, pgAdmin, Postman, VS Code",
  "  ",
];

const contactText = [
  "  ",
  "  email      <a href='mailto:" + email + "'>" + email + "</a>",
  "  instagram  <a href='https://www.instagram.com/squid_rulez/' target='_blank'>@squid_rulez</a>",
  "  linkedin   <a href='" + linkedin + "' target='_blank'>linkedin.com/in/daniel-gooden</a>",
  "  github     <a href='" + github + "' target='_blank'>github.com/dangoodie</a>",
  "  leetcode   <a href='https://leetcode.com/dangoodie/' target='_blank'>leetcode.com/dangoodie</a>",
  //"Resume: <a href='" + resume + "' target='_blank'>resume</a>",
  "  ",
];
