#! /usr/bin/env node
const inquirer = require("inquirer")
const fuzzy = require('fuzzy');
const fs = require("fs");
const path = require("path");
const {getNextTemplate, getChoices, getTemplateString} = require("./template/getTemplate")
inquirer.registerPrompt('fuzzypath', require('inquirer-fuzzy-path'))
const inquirerPrompt = require('inquirer-autocomplete-prompt');
inquirer.registerPrompt('autocomplete', inquirerPrompt);
const {searchTsReactTemplate} = require("./template/ts/tsReactTemplate")
const {searchJsReactTemplate} = require("./template/js/jsReactTemplate")
const {searchJsNextTemplate} = require("./template/js/jsNextTemplate");
const {searchTsNextTemplate} = require("./template/ts/tsNextTemplate");


questions = [
	{
		type: 'list',
		name: 'templateType',
		message: 'Choose Template Categories :',
		choices: ["next", "react"],
	}, {
		type: 'list',
		name: 'fileType',
		message: 'choose template type',
		choices: ['ts', 'js'],
		when: (answers) => answers.templateType != null
	}, {
		type: 'autocomplete',
		name: 'template',
		source: searchJsReactTemplate,
		message: 'Choose react template',
		when: (answers) => answers.templateType == "react" && answers.fileType == "js"
	}, {
		type: 'autocomplete',
		name: 'template',
		source: searchTsReactTemplate,
		message: 'Choose react template',
		when: (answers) => answers.templateType == "react" && answers.fileType == "ts"
	}, {
		type: 'autocomplete',
		name: 'template',
		source: searchJsNextTemplate,
		message: 'Choose next template',
		when: (answers) => answers.templateType == "next" && answers.fileType == "js"
	}, {
		type: 'autocomplete',
		name: 'template',
		source: searchTsNextTemplate,
		message: 'Choose next template',
		when: (answers) => answers.templateType == "next" && answers.fileType == "ts"
	}, {
		type: 'list',
		name: 'method',
		choices: ['new file', 'insert'],
		message: 'Choose method',
		when: (answers) => answers.template != null
	}, {
		type: 'fuzzypath',
		name: 'directory',
		excludePath: nodePath => nodePath.startsWith('node_modules'),
		excludeFilter: nodePath => nodePath == '.',
		itemType: 'file',
		rootPath: './',
		message: 'Select a target directory for your component:',
		suggestOnly: false,
		depthLimit: 5,
		when: (answers) => answers.method == 'insert'
	}, {
		type: 'fuzzypath',
		name: 'directory',
		excludePath: nodePath => nodePath.startsWith('node_modules'),
		excludeFilter: nodePath => nodePath == '.',
		itemType: 'directory',
		rootPath: './',
		message: 'Select a target directory for your component:',
		suggestOnly: false,
		depthLimit: 5,
		when: (answers) => answers.method == 'new file'
	}, {
		type: 'input',
		name: 'lineNumber',
		message: 'Choose line number (-1 for append)',
		when: (answers) => answers.method === 'insert' && answers.directory != null
	}, {
		type: 'input',
		name: 'fileName',
		message: 'Choose file name',
		when: (answers) => answers.method === 'new file' && answers.directory != null
	}
]

inquirer.prompt(questions).then((answers) => {
	const templateSave = getTemplateString(answers.templateType, answers.fileType, answers.template)
	console.log(templateSave)
	if (answers.method === 'new file') {
		fs.writeFile(path.join(answers.directory, answers.fileName + "." + answers.fileType), templateSave, function (err) {
			if (err) throw err;
			console.log('Saved file!');
		});
	}
	if (answers.method === 'insert') {
		if (answers.lineNumber === "-1") {
			fs.appendFile(path.join(answers.directory), templateSave, function (err) {
				if (err) throw err;
				console.log('Saved file!');
			});
		} else {
			var data = fs.readFileSync(path.join(answers.directory)).toString().split("\n");
			data.splice(answers.lineNumber, 0, templateSave);
			var text = data.join("\n");
			fs.writeFile(path.join(answers.directory), text, function (err) {
				if (err) return console.log(err);
			});
		}
	}
	console.log(JSON.stringify(answers, null, '  '));
});
