#! /usr/bin/env node
const inquirer = require("inquirer")
const {CategoriesList} = require("./template/category");
const globalCategory = require("./GLOBAL_CATEGORIES")
const {nextBoilerList} = require("./template/next_boiler");
const fs = require("fs");
const path = require("path");
const {reactBoilerList} = require("./template/react_boiler");
inquirer.registerPrompt('fuzzypath', require('inquirer-fuzzy-path'))

questions = [{
    type: 'list',
    name: 'categoriesType',
    message: 'Choose Template Categories :',
    choices: CategoriesList,
}, {
    type: 'list',
    name: 'template',
    choices: reactBoilerList,
    message: 'Choose react template',
    when: (answers) => answers.categoriesType === globalCategory.REACT_BOILER
}, {
    type: 'list',
    name: 'template',
    choices: nextBoilerList,
    message: 'Choose next template',
    when: (answers) => answers.categoriesType === globalCategory.NEXT_BOILER
}, {
    type: 'fuzzypath',
    name: 'directory',
    excludePath: nodePath => nodePath.startsWith('node_modules'),
    excludeFilter: nodePath => nodePath == '.',
    itemType: 'any',
    rootPath: '.',
    message: 'Select a target directory for your component:',
    default: './',
    suggestOnly: false,
    depthLimit: 5,
}, {
    type: 'input',
    name: 'fileName',
    message: 'Choose file name',
    when: (answers) => answers.directory != null
},{
    type: 'list',
    name: 'method',
    choices: ['new file', 'insert'],
    message: 'Choose method',
    when: (answers) => answers.fileName != null
},{
    type: 'input',
    name: 'lineNumber',
    message: 'Choose line number (-1 for append)',
    when: (answers) => answers.method === 'insert'
}
]

inquirer.prompt(questions).then((answers) => {
    if (answers.method === 'new file') {
        fs.writeFile(path.join(answers.directory, answers.fileName+ ".js") , answers.template, function (err) {
            if (err) throw err;
            console.log('Saved file!');
        });
    }
    if (answers.method === 'insert') {
        if (answers.lineNumber === "-1") {
            fs.appendFile(path.join(answers.directory, answers.fileName+ ".js") , answers.template, function (err) {
                if (err) throw err;
                console.log('Saved file!');
            });
        } else {
            var data = fs.readFileSync(path.join(answers.directory, answers.fileName+ ".js")).toString().split("\n");
            data.splice(answers.lineNumber, 0, answers.template);
            var text = data.join("\n");
            fs.writeFile(path.join(answers.directory, answers.fileName+ ".js"), text, function (err) {
                if (err) return console.log(err);
            });
        }
    }
    console.log(JSON.stringify(answers, null, '  '));
});
