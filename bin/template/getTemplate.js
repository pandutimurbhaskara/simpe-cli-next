const {jsNextTemplate, searchJsNextTemplate} = require("./js/jsNextTemplate")
const {tsNextTemplate, searchTsNextTemplate} = require("./ts/tsNextTemplate")
const {tsReactTemplate, searchTsReactTemplate} = require("./ts/tsReactTemplate");
const {jsReactTemplate, searchJsReactTemplate} = require("./js/jsReactTemplate");

const getNextTemplate = (templateType, fileType) => {
	switch (templateType) {
		case "next" :
			if (fileType === "ts") {
				return tsNextTemplate
			}
			if (fileType === "js") {
				return jsNextTemplate
			}
		case "react" :
			if (fileType === "ts") {
				return tsReactTemplate
			}
			if (fileType === "js") {
				return jsReactTemplate
			}
	}
}

const getChoices = (templateType, fileType) => {
	console.log(templateType, fileType)
	switch (templateType) {
		case "next" :
			if (fileType === "ts") {
				return searchTsNextTemplate
			}
			if (fileType === "js") {
				return searchJsNextTemplate
			}
		case "react" :
			if (fileType === "ts") {
				console.log(templateType, fileType)
				return searchTsReactTemplate
			}
			if (fileType === "js") {
				return searchJsReactTemplate
			}
	}
}

const getTemplateString = (templateType, fileType, templateName) => {
	switch (templateType) {
		case "next" :
			if (fileType === "ts") {
				let getNextTs = tsNextTemplate.filter(value => value.name === templateName)
				return getNextTs[0].value
			}
			if (fileType === "js") {
				let getNextJs = jsNextTemplate.filter(value => value.name === templateName)
				return getNextJs[0].value
			}
		case "react" :
			if (fileType === "ts") {
				let getReactTs = tsReactTemplate.filter(value => value.name === templateName)
				return getReactTs[0].value
			}
			if (fileType === "js") {
				let getReactJs = jsReactTemplate.filter(value => value.name === templateName)
				return getReactJs[0].value
			}
	}
}

module.exports = {getNextTemplate: getNextTemplate, getChoices: getChoices, getTemplateString: getTemplateString}
