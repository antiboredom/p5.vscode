import * as vscode from "vscode";
import { existsSync, open } from "fs";
const Uri = vscode.Uri;
const fs = vscode.workspace.fs;

export async function activate(context: vscode.ExtensionContext) {
  // openPreviousFile(context);

  let disposable = vscode.commands.registerCommand(
    "p5-vscode.createProject",
    async () => {
      try {
        let filePath = await vscode.window.showOpenDialog({
          canSelectFiles: false,
          canSelectFolders: true,
          canSelectMany: false,
        });
        if (filePath) {
          const dest = filePath[0].path;
          await copyTemplate(dest);
          const destUri = Uri.file(dest);
          // const sketchFile = Uri.joinPath(destUri, "sketch.js");
          // await context.globalState.update("p5SketchToOpen", sketchFile.path);
          await vscode.commands.executeCommand("vscode.openFolder", destUri);
        }
      } catch (e) {
        console.error(e);
      }
    }
  );

  context.subscriptions.push(disposable);
}

async function openPreviousFile(context: vscode.ExtensionContext) {
  const sketchToOpen: string | undefined = context.globalState.get(
    "p5SketchToOpen"
  );
  if (sketchToOpen) {
    console.log("FOUND", sketchToOpen);
    await vscode.commands.executeCommand("vscode.open", Uri.file(sketchToOpen));
    await context.globalState.update("p5SketchToOpen", undefined);
  }
}

async function copyTemplate(dest: string) {
  const paths: string[] = [
    "index.html",
    "style.css",
    "sketch.js",
    "libraries/p5.min.js",
    "libraries/p5.sound.min.js",
  ];

  const baseSrc = Uri.joinPath(Uri.file(__dirname), "../template");

  const baseDest = Uri.file(dest);
  fs.createDirectory(baseDest);

  const librariesPath = Uri.joinPath(baseDest, "libraries");
  fs.createDirectory(librariesPath);

  for (const p of paths) {
    const src = Uri.joinPath(baseSrc, p);
    const dest = Uri.joinPath(baseDest, p);

    if (existsSync(dest.path)) {
      continue;
    }

    try {
      await fs.copy(src, dest, { overwrite: false });
    } catch (e) {
      console.error(e);
    }
  }
}

// this method is called when your extension is deactivated
export function deactivate() {}
