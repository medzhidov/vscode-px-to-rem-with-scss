'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "px-to-rem-with-scss" is now active!');

    // create a new word counter
    let selections = new Selections();

    var disposable = vscode.commands.registerCommand('extension.active', () => {
        selections.showSelections();
    });

    // Add to a list of disposables which are disposed when this extension is deactivated.
    context.subscriptions.push(selections);
    context.subscriptions.push(disposable);
}

class Selections {
    
    public showSelections(): void {
        var editor = vscode.window.activeTextEditor;

        const selections: vscode.Selection[] = editor.selections;
        

        editor.edit(builder => {
            for (const selection of selections) {
                var text = editor.document.getText(new vscode.Range(selection.start, selection.end));
                var matches = text.match(/(-?)([0-9]+)px/g);
                
                if( matches != null ){
                    matches.forEach(function(val, i){
                        text = text.replace(val, `rem(${parseInt(val)})`);
                    });
                }
                
                builder.replace(selection, text);
            }
        });
    }

    dispose() {
    } 
}

// this method is called when your extension is deactivated
export function deactivate() {
}