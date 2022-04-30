#! /usr/bin/env node
const inquirer = require("inquirer")
const {CategoriesList} = require("./template/category");
const globalCategory = require("./GLOBAL_CATEGORIES")
const {nextBoilerList} = require("./template/next_boiler");
const fs = require("fs");
const path = require("path");
questions = [{
    type: 'list',
    name: 'categoriesType',
    message: 'Choose Template Categories :',
    choices: CategoriesList,
    default: 'mongoDB'
}, {
    type: 'input',
    name: 'template',
    message: 'Choose react boiler',
    when: (answers) => answers.categoriesType === globalCategory.REACT_BOILER
}, {
    type: 'list',
    name: 'template',
    choices: nextBoilerList,
    message: 'Choose next boiler',
    when: (answers) => answers.categoriesType === globalCategory.NEXT_BOILER
}, {
    type: 'input',
    name: 'directory',
    message: 'Choose direcrtory',
    when: (answers) => answers.template != null
},{
    type: 'input',
    name: 'fileName',
    message: 'Choose file name',
    when: (answers) => answers.directory != null
}
]

inquirer.prompt(questions).then((answers) => {
    fs.appendFile(path.join(answers.directory, answers.fileName) + ".js", answers.template, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
    console.log(JSON.stringify(answers, null, '  '));
});
