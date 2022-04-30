#! /usr/bin/env node
const yargs = require('yargs');
const utils = require("./utils")
const fs = require('fs');

const usage = "\nUsage: cli-fs cr file_name";
const options = yargs
	.usage(usage)
	.option("l", {alias:"list", describe: "List of template.", type: "boolean", demandOption: false })
	.help(true)
	.argv;

if (yargs.argv._[1] != null) {
	const fileName = utils.parseFileName(yargs.argv._[1])
	let content =  utils.getTemplate(yargs.argv._[2])
	fs.appendFile(fileName, content, function (err) {
		if (err) throw err;
		console.log('Saved!');
	});
}

if(yargs.argv.l == true || yargs.argv.list == true){
	utils.showTemplate();
	return;
}

if(yargs.argv._[0] == null){
	utils.showHelp();
	return;
}


