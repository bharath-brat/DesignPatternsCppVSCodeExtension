// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
//import {showItemsToSelect} from './VSOperations';
const createDesignPatternExports = require('./createDesignPatternSnippet.js');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "DesignPatternsCpp" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable1 = vscode.commands.registerCommand('DesignPatternsCpp.CreateSingletonDesignPatternSnippetCpp', function () {
		//showItemsToSelect();
		createDesignPatternExports.createDesignPatternSnippet(createDesignPatternExports.designPatterns.singleton);
	});

	let disposable2 = vscode.commands.registerCommand('DesignPatternsCpp.CreateAbstractFactoryDesignPatternSnippetCpp', function () {
		//showItemsToSelect();
		createDesignPatternExports.createDesignPatternSnippet(createDesignPatternExports.designPatterns.abstractFactory);
	});

	let disposable3 = vscode.commands.registerCommand('DesignPatternsCpp.CreateBuilderDesignPatternSnippetCpp', function () {
		//showItemsToSelect();
		createDesignPatternExports.createDesignPatternSnippet(createDesignPatternExports.designPatterns.builder);
	});

	let disposable4 = vscode.commands.registerCommand('DesignPatternsCpp.CreateAdapterDesignPatternSnippetCpp', function () {
		//showItemsToSelect();
		createDesignPatternExports.createDesignPatternSnippet(createDesignPatternExports.designPatterns.adapter);
	});

	let disposable5 = vscode.commands.registerCommand('DesignPatternsCpp.CreateBridgeDesignPatternSnippetCpp', function () {
		//showItemsToSelect();
		createDesignPatternExports.createDesignPatternSnippet(createDesignPatternExports.designPatterns.bridge);
	});

	let disposable6 = vscode.commands.registerCommand('DesignPatternsCpp.CreateChainOfResponsibilityDesignPatternSnippetCpp', function () {
		//showItemsToSelect();
		createDesignPatternExports.createDesignPatternSnippet(createDesignPatternExports.designPatterns.chainOfResponsibility);
	});

	let disposable7 = vscode.commands.registerCommand('DesignPatternsCpp.CreateCommandDesignPatternSnippetCpp', function () {
		//showItemsToSelect();
		createDesignPatternExports.createDesignPatternSnippet(createDesignPatternExports.designPatterns.command);
	});

	let disposable8 = vscode.commands.registerCommand('DesignPatternsCpp.CreateCompositerDesignPatternSnippetCpp', function () {
		//showItemsToSelect();
		createDesignPatternExports.createDesignPatternSnippet(createDesignPatternExports.designPatterns.composite);
	});

	let disposable9 = vscode.commands.registerCommand('DesignPatternsCpp.CreateDecoratorDesignPatternSnippetCpp', function () {
		//showItemsToSelect();
		createDesignPatternExports.createDesignPatternSnippet(createDesignPatternExports.designPatterns.decorator);
	});

	let disposable10 = vscode.commands.registerCommand('DesignPatternsCpp.CreateFacadeDesignPatternSnippetCpp', function () {
		//showItemsToSelect();
		createDesignPatternExports.createDesignPatternSnippet(createDesignPatternExports.designPatterns.facade);
	});

	let disposable11 = vscode.commands.registerCommand('DesignPatternsCpp.CreateFactoryMethodDesignPatternSnippetCpp', function () {
		//showItemsToSelect();
		createDesignPatternExports.createDesignPatternSnippet(createDesignPatternExports.designPatterns.factoryMethod);
	});

	let disposable12 = vscode.commands.registerCommand('DesignPatternsCpp.CreateFlyweightDesignPatternSnippetCpp', function () {
		//showItemsToSelect();
		createDesignPatternExports.createDesignPatternSnippet(createDesignPatternExports.designPatterns.flyweight);
	});

	let disposable13 = vscode.commands.registerCommand('DesignPatternsCpp.CreateIteratorDesignPatternSnippetCpp', function () {
		//showItemsToSelect();
		createDesignPatternExports.createDesignPatternSnippet(createDesignPatternExports.designPatterns.iterator);
	});

	let disposable14 = vscode.commands.registerCommand('DesignPatternsCpp.CreateMediatorDesignPatternSnippetCpp', function () {
		//showItemsToSelect();
		createDesignPatternExports.createDesignPatternSnippet(createDesignPatternExports.designPatterns.mediator);
	});

	let disposable15 = vscode.commands.registerCommand('DesignPatternsCpp.CreateMementoDesignPatternSnippetCpp', function () {
		//showItemsToSelect();
		createDesignPatternExports.createDesignPatternSnippet(createDesignPatternExports.designPatterns.memento);
	});

	let disposable16 = vscode.commands.registerCommand('DesignPatternsCpp.CreateObserverDesignPatternSnippetCpp', function () {
		//showItemsToSelect();
		createDesignPatternExports.createDesignPatternSnippet(createDesignPatternExports.designPatterns.observer);
	});

	let disposable17 = vscode.commands.registerCommand('DesignPatternsCpp.CreatePrototypeDesignPatternSnippetCpp', function () {
		//showItemsToSelect();
		createDesignPatternExports.createDesignPatternSnippet(createDesignPatternExports.designPatterns.prototype);
	});

	let disposable18 = vscode.commands.registerCommand('DesignPatternsCpp.CreateProxyDesignPatternSnippetCpp', function () {
		//showItemsToSelect();
		createDesignPatternExports.createDesignPatternSnippet(createDesignPatternExports.designPatterns.proxy);
	});

	let disposable19 = vscode.commands.registerCommand('DesignPatternsCpp.CreateStrategyDesignPatternSnippetCpp', function () {
		//showItemsToSelect();
		createDesignPatternExports.createDesignPatternSnippet(createDesignPatternExports.designPatterns.strategy);
	});

	let disposable20 = vscode.commands.registerCommand('DesignPatternsCpp.CreateTemplateMethodDesignPatternSnippetCpp', function () {
		//showItemsToSelect();
		createDesignPatternExports.createDesignPatternSnippet(createDesignPatternExports.designPatterns.templateMethod);
	});

	let disposable21 = vscode.commands.registerCommand('DesignPatternsCpp.CreateStateDesignPatternSnippetCpp', function () {
		//showItemsToSelect();
		createDesignPatternExports.createDesignPatternSnippet(createDesignPatternExports.designPatterns.state);
	});

	let disposable22 = vscode.commands.registerCommand('DesignPatternsCpp.CreateVisitorDesignPatternSnippetCpp', function () {
		//showItemsToSelect();
		createDesignPatternExports.createDesignPatternSnippet(createDesignPatternExports.designPatterns.visitor);
	});


	context.subscriptions.push(disposable1);
	context.subscriptions.push(disposable2);
	context.subscriptions.push(disposable3);
	context.subscriptions.push(disposable4);
	context.subscriptions.push(disposable5);
	context.subscriptions.push(disposable6);
	context.subscriptions.push(disposable7);
	context.subscriptions.push(disposable8);
	context.subscriptions.push(disposable9);
	context.subscriptions.push(disposable10);
	context.subscriptions.push(disposable11);
	context.subscriptions.push(disposable12);
	context.subscriptions.push(disposable13);
	context.subscriptions.push(disposable14);
	context.subscriptions.push(disposable15);
	context.subscriptions.push(disposable16);
	context.subscriptions.push(disposable17);
	context.subscriptions.push(disposable18);
	context.subscriptions.push(disposable19);
	context.subscriptions.push(disposable20);
	context.subscriptions.push(disposable21);
	context.subscriptions.push(disposable22);

}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
