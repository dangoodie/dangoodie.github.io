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
  "Available commands:",
  "  help         list all available commands",
  "  about        learn more about me",
  "  projects     list all projects",
  "  skills       list all skills",
  "  contact      display contact information",
  "  resume       print out my resume",
  "  banner       displays the ascii banner",
  "  clear        clear the terminal",
  "  ",
];

const aboutText = [
  "                                                               ",
  "Hi, I'm Daniel! 🔥",
  "  ",
  "I'm a Field Service Engineer at DroneShield, finishing a computer science",
  "degree at the University of New England in Armidale, Australia.",
  "In 2010 I moved to Australia from the United States after completing",
  "high school in Texas. I have been living in Australia ever since.",
  "  ",
  "Before DroneShield I spent about 15 years in the production industry as a",
  "touring Lighting Director, including 9 years at Hillsong Church and",
  "6 years at the Australian Broadcasting Corporation. That background",
  "still shapes what I build: I'm drawn to real-time systems, graphics,",
  "and tooling for live events and light art.",
  "  ",
  "I've been coding since I was a teenager. These days I mostly work in",
  "Rust, Go, Python and TypeScript, and I spend my spare time on side",
  "projects, mentoring with Code Sydney, and the occasional map.",
  "  ",
  "Reach out if you'd like to collaborate on a project or just to chat.",
  "  ",
  "<a href='mailto:" + email + "'>" + email + "</a>",
  "  ",
];

const projectsText = [
  "  ",
  "  Moree Flood Viewer   <a href='https://moree-flood.danielgooden.com' target='_blank'>moree-flood.danielgooden.com</a>",
  "    - An interactive 2D/3D flood map for Moree, NSW, built with the NSW SES as my",
  "      University of New England capstone project. Explore modelled flood extents,",
  "      water depths and road closures by return period.",
  "    - Flood grids are processed by a Python pipeline into cloud-optimised GeoTIFFs",
  "      and vector tiles, served as static data so the viewer runs with no backend.",
  "    - Tech stack: TypeScript, React, MapLibre, deck.gl, Vite, Python (rasterio),",
  "      Cloudflare Pages + R2",
  "  ",
  "  symphonAI            <a href='https://github.com/symphonAI' target='_blank'>github.com/symphonAI</a>",
  "    - A music recommendation engine that uses machine learning to",
  "      recommend music based on user preferences.",
  "    - Tech stack: React , Tailwind, Go , AWS API Gateway, AWS Lambda, DynamoDB",
  "  ",
  "  Code Sydney          <a href='https://www.code.sydney/' target='_blank'>code.sydney/</a>",
  "    - I am a mentor and active member of the Code Sydney community. This includes",
  "      mentoring students, attending meetups, and contributing to open source projects.",
  "  ",
  "  Prisoners AID ACT    <a href='https://www.paact.org.au/' target='_blank'>paact.org.au</a>",
  "    - A website for the non-profit organisation Prisoners Aid ACT.",
  "      I helped maintain and added some features to the website as a volunteer",
  "      and mentor with Code Sydney.",
  "    - Tech stack: Next.js, AWS S3",
  "  ",
];

const skillsText = [
  "  ",
  "  languages:    Rust, Go, Python, TypeScript, JavaScript",
  "  frameworks:   Svelte, React, Tailwind, Vite, Node.js",
  "  databases:    PostgreSQL, SQLite",
  "  tools:        Git, GitHub, Cloudflare, AWS, Docker, Linux",
  "  ",
];

const contactText = [
  "  ",
  "  email      <a href='mailto:" + email + "'>" + email + "</a>",
  "  instagram  <a href='https://www.instagram.com/squid_rulez/' target='_blank'>@squid_rulez</a>",
  "  linkedin   <a href='" + linkedin + "' target='_blank'>linkedin.com/in/daniel-gooden</a>",
  "  github     <a href='" + github + "' target='_blank'>github.com/dangoodie</a>",
  //"Resume: <a href='" + resume + "' target='_blank'>resume</a>",
  "  ",
];
