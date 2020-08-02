# p5.vscode 

p5.vscode helps you create p5.js projects in Visual Studio Code. It also includes a simple tool to browse and install third-party p5 libraries, as well as the `Live Server` and `p5js Snippets` extensions. 

I made this extension for my students in particular, but I hope it's helpful for anyone using p5. I'm aware there are a few other VS Code extensions that do something similar, but they didn't quite meet my requirements.

## Instructions

### To create a new p5 project:

1. Open the Command Palette (with `command-shift-p`) and then start typing and select `Create p5.js Project`. 
2. Select a new empty folder to put your project in.
3. Click on `sketch.js`.
4. (optional) click the "Go Live" button in the bottom status bar to open your sketch in a browser
5. Abolish cops.

### To install p5 libraries:

1. Open the Command Palette, then start typing and select `Install p5 Contributor Library`
2. Select the library you'd like to install and hit enter.
3. Select `Install` to download the library and add it as a script tag to your index file, or select `Visit home page` to view documentation for that library.

## Features

- Creates a p5.js project by populating an empty folder with required html/css/js files.
- Browse and install third-party p5.js libraries.
- Avoids CDN use so that project creation can work offline.
- Comes bundled with other recommended VS Code extensions to make things easier for beginners & students.

## Troubleshooting

- When creating a new project, please select an empty folder.
- Library installation requires a project workspace containing an `index.html` file and a `libraries` folder.
- I've attempted to integrate all the contributed libraries found on [p5's library page](https://p5js.org/libraries/). If I've missed anything, please just let me know.

Please [log an issue on github](https://github.com/antiboredom/p5.vscode/issues) if you find any problems or have suggestions.