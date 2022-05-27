const fuzzy = require("fuzzy")

const getServerSideProps=  "\nexport async function getServerSideProps(context) {\n" +
	"  return {\n" +
	"    props: {}, // will be passed to the page component as props\n" +
	"  }\n" +
	"}"
const getStaticProps = "\nexport async function getStaticProps(context) {\n" +
	"  return {\n" +
	"    props: {}, // will be passed to the page component as props\n" +
	"  }\n" +
	"}"

const jsUseState = "const [first, setfirst] = useState(initialState);"
const jsUseEffect = "const [state, setState] = useState(initialState);"
const jsUseReducer = "const [state, dispatch] = useReducer(reducer, initialState);"
const jsReduxAction = "export const name = (payload) => ({\n" +
	"  type: //,\n" +
	"  payload\n" +
	"})\n"
const jsReduxReducer = "const initialState = {}\n" +
	"\n" +
	"export default (state = initialState, { type, payload }) => {\n" +
	"  switch (type) {\n" +
	"\n" +
	"  case first:\n" +
	"\treturn { ...state, ...payload }\n" +
	"\n" +
	"  default:\n" +
	"\treturn state\n" +
	"  }\n" +
	"}\n"

const jsReactClassComponent = "import React, { Component } from 'react'\n" +
	"\n" +
	"export class index extends Component {\n" +
	"  render() {\n" +
	"    return (\n" +
	"      <div>index</div>\n" +
	"    )\n" +
	"  }\n" +
	"}\n" +
	"\n" +
	"export default index"


const jsReactFuncComponent = "import React from 'react'\n" +
	"\n" +
	"export default function index() {\n" +
	"  return (\n" +
	"    <div>index</div>\n" +
	"  )\n" +
	"}\n"

const jsReactFuncComponentExport = "import React from 'react'\n" +
	"\n" +
	"function index() {\n" +
	"  return (\n" +
	"    <div>index</div>\n" +
	"  )\n" +
	"}\n" +
	"\n" +
	"export default index"

const jsReactArrowComponent = "import React from 'react'\n" +
	"\n" +
	"export const index = () => {\n" +
	"  return (\n" +
	"    <div>index</div>\n" +
	"  )\n" +
	"}\n"

const jsReactArrowComponentExport = "import React from 'react'\n" +
	"\n" +
	"function index() {\n" +
	"  return (\n" +
	"    <div>index</div>\n" +
	"  )\n" +
	"}\n" +
	"\n" +
	"export default index"

const jsReactFuncComponentRedux = "import React from 'react'\n" +
	"import { connect } from 'react-redux'\n" +
	"\n" +
	"export const index = (props) => {\n" +
	"  return (\n" +
	"    <div>index</div>\n" +
	"  )\n" +
	"}\n" +
	"\n" +
	"const mapStateToProps = (state) => ({})\n" +
	"\n" +
	"const mapDispatchToProps = {}\n" +
	"\n" +
	"export default connect(mapStateToProps, mapDispatchToProps)(index)"

const jsReactClassComponentRedux = "import React, { Component } from 'react'\n" +
	"import { connect } from 'react-redux'\n" +
	"\n" +
	"export class index extends Component {\n" +
	"  render() {\n" +
	"    return (\n" +
	"      <div>index</div>\n" +
	"    )\n" +
	"  }\n" +
	"}\n" +
	"\n" +
	"const mapStateToProps = (state) => ({})\n" +
	"\n" +
	"const mapDispatchToProps = {}\n" +
	"\n" +
	"export default connect(mapStateToProps, mapDispatchToProps)(index)"


const jsReactTemplate = [{
	name: "getServerSideProps",
	value: getServerSideProps
}, {
	name: "getStaticProps",
	value: getStaticProps,
}, {
	name: "jsUseState",
	value: jsUseState
}, {
	name: "jsUseEffect",
	value: jsUseEffect
}, {
	name: "jsUseReducer",
	value: jsUseReducer
}, {
	name: "jsReduxAction",
	value: jsReduxAction
},{
	name: "jsReduxReducer",
	value: jsReduxReducer
},{
	name: "jsReactClassComponent",
	value: jsReactClassComponent
},{
	name: "jsReactClassComponentRedux",
	value: jsReactClassComponentRedux
},{
	name: "jsReactFuncComponent",
	value: jsReactFuncComponent
},{
	name: "jsReactFuncComponentRedux",
	value: jsReactFuncComponentRedux
},{
	name: "jsReactFuncComponentExport",
	value: jsReactFuncComponentExport
}, {
	name: "jsReactArrowComponent",
	value: jsReactArrowComponent
}, {
	name: "jsReactArrowComponentExport",
	value: jsReactArrowComponentExport
}
]

function searchJsReactTemplate(answers, input = '') {
	let choices = []
	for (const value of jsReactTemplate) {
		choices.push(value.name)
	}
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(fuzzy.filter(input, choices).map((el) => el.original));
		}, Math.random() * 470 + 30);
	});
}

module.exports = {jsReactTemplate: jsReactTemplate, searchJsReactTemplate: searchJsReactTemplate}

