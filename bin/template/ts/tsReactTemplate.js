const fuzzy = require("fuzzy")

const tsReactClassComponent = "import React, { Component } from 'react'\n" +
	"\n" +
	"type Props = {}\n" +
	"\n" +
	"type State = {}\n" +
	"\n" +
	"export default class plain extends Component<Props, State> {\n" +
	"  state = {}\n" +
	"\n" +
	"  render() {\n" +
	"    return (\n" +
	"      <div>plain</div>\n" +
	"    )\n" +
	"  }\n" +
	"}"

const tsReactClassComponentExport = "import React, { Component } from 'react'\n" +
	"\n" +
	"type Props = {}\n" +
	"\n" +
	"type State = {}\n" +
	"\n" +
	"class plain extends Component<Props, State> {\n" +
	"  state = {}\n" +
	"\n" +
	"  render() {\n" +
	"    return (\n" +
	"      <div>plain</div>\n" +
	"    )\n" +
	"  }\n" +
	"}\n" +
	"\n" +
	"export default plain"

const tsReactFunctionalComponent = "import React from 'react'\n" +
	"\n" +
	"type Props = {}\n" +
	"\n" +
	"export default function plain({}: Props) {\n" +
	"  return (\n" +
	"    <div>plain</div>\n" +
	"  )\n" +
	"}"

const tsReactFunctionalComponentExport = "import React from 'react'\n" +
	"\n" +
	"type Props = {}\n" +
	"\n" +
	"function index({}: Props) {\n" +
	"  return (\n" +
	"\t<div>index</div>\n" +
	"  )\n" +
	"}\n" +
	"\n" +
	"export default index"

const tsReactArrowFuncComponent = "import React from 'react'\n" +
	"\n" +
	"type Props = {}\n" +
	"\n" +
	"const plain = (props: Props) => {\n" +
	"  return (\n" +
	"    <div>plain</div>\n" +
	"  )\n" +
	"}"

const tsReactArrowFuncComponentExport = "import React from 'react'\n" +
	"\n" +
	"type Props = {}\n" +
	"\n" +
	"const plain = (props: Props) => {\n" +
	"  return (\n" +
	"    <div>plain</div>\n" +
	"  )\n" +
	"}\n" +
	"\n" +
	"export default plain"

const tsUseState = "const [state, setState] = useState(initialState);"
const tsUseEffect = "const [state, setState] = useState(initialState);"
const tsUseReducer = "const [state, dispatch] = useReducer(reducer, initialState);"
const tsReduxAction = "export const name = (payload) => ({\n" +
	"  type: //,\n" +
	"  payload\n" +
	"})\n"
const tsReduxReducer = "const initialState = {}\n" +
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
const tsReactClassComponentRedux = "import { connect } from 'react-redux'\n" +
	"import React, { Component } from 'react'\n" +
	"\n" +
	"type Props = {}\n" +
	"\n" +
	"type State = {}\n" +
	"\n" +
	"export class index extends Component<Props, State> {\n" +
	"  state = {}\n" +
	"\n" +
	"  render() {\n" +
	"\treturn (\n" +
	"\t  <div>index</div>\n" +
	"\t)\n" +
	"  }\n" +
	"}\n" +
	"\n" +
	"const mapStateToProps = (state) => ({})\n" +
	"\n" +
	"const mapDispatchToProps = {}\n" +
	"\n" +
	"export default connect(mapStateToProps, mapDispatchToProps)(index)"

const tsReactTemplate = [{
	name: "tsReactClassComponent",
	value: tsReactClassComponent
},{
	name: "tsReactClassComponentExport",
	value: tsReactClassComponentExport
},{
	name: "tsReactFunctionalComponent",
	value: tsReactFunctionalComponent
},{
	name: "tsReactArrowFuncComponent",
	value: tsReactArrowFuncComponent
},{
	name: "tsReactArrowFuncComponentExport",
	value: tsReactArrowFuncComponentExport
},{
	name: "tsReactFunctionalComponentExport",
	value: tsReactFunctionalComponentExport
}, {
	name: "tsUseState",
	value: tsUseState
}, {
	name: "tsUseEffect",
	value: tsUseEffect
}, {
	name: "tsUseReducer",
	value: tsUseReducer
}, {
	name: "tsReduxAction",
	value: tsReduxAction
},{
	name: "tsReduxReducer",
	value: tsReduxReducer
}, {
	name: "tsReactClassComponentRedux",
	value: tsReactClassComponentRedux
}]

function searchTsReactTemplate(answers, input = '') {
	let choices = []
	for (const value of tsReactTemplate) {
		choices.push(value.name)
	}
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(fuzzy.filter(input, choices).map((el) => el.original));
		}, Math.random() * 470 + 30);
	});
}

module.exports = {tsReactTemplate: tsReactTemplate, searchTsReactTemplate: searchTsReactTemplate}
