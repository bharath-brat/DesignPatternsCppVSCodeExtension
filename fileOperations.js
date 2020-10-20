const fs = require("fs");
const path = require("path");
const vscode = require('vscode');

function createDestinationDirectory(folderPath, dirName)
{
    fs.mkdir(path.join(folderPath, dirName), err => {
        if (err) {
            return vscode.window.showErrorMessage(
              "Failed to create directory!"
            );
          }
          vscode.window.showInformationMessage("Created directory");
    }
    );
    return path.join(folderPath, dirName);
}
function createDestinationFiles (folderPath, fileName, fileContent)
{
    fs.writeFile(path.join(folderPath, fileName), fileContent, err => {
        if (err) {
          return vscode.window.showErrorMessage(
            "Failed to create source file!"
          );
        }
        vscode.window.showInformationMessage("Created source files");
      });
}

module.exports = {createDestinationDirectory, createDestinationFiles}