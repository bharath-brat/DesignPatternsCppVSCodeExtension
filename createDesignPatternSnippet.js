const fs = require("fs");
const vscode = require('vscode');

const fileOperations = require("./fileOperations.js");

const designPatterns = 
{
    singleton : "singleton",
    abstractFactory : "abstractFactory",
    builder : "builder",
    adapter : "adapter",
    bridge : "bridge",
    chainOfResponsibility : "chainOfResponsibility",
    command : "command",
    composite : "composite",
    decorator : "decorator",
    facade : "facade",
    factoryMethod : "factoryMethod",
    flyweight : "flyweight",
    iterator : "iterator",
    mediator : "mediator",
    memento : "memento",
    observer : "observer",
    prototype : "prototype",
    proxy : "proxy",
    state : "state",
    strategy : "strategy",
    templateMethod : "templateMethod",
    visitor : "visitor"
}
//Source folder path
const sourceFolderPath = __dirname + "\\DesignPatternCodeBase\\";

//Destination folder path
const destinationFolderPath = vscode.workspace.workspaceFolders[0].uri.fsPath;

function createSourceCodeForPatternFromFile(designPattern)
{
    //Read files from source Path
    let sourceFilePath = sourceFolderPath + designPattern + "\\" + designPattern + ".txt"
    let sourceFileContent = fs.readFileSync(sourceFilePath).toString();

    //Create Design Pattern Deirectory in the destination folder
    let dirName = fileOperations.createDestinationDirectory(destinationFolderPath, designPattern);

    //Create files in destination folder
    let destinationFileName = designPattern + ".cpp";
    fileOperations.createDestinationFiles(dirName, destinationFileName, sourceFileContent);
}


function createDesignPatternSnippet(pattern) {
    console.log("I'm inside createDesignPatternSnippet");
    createSourceCodeForPatternFromFile(pattern);
}


module.exports = {createDesignPatternSnippet, designPatterns}