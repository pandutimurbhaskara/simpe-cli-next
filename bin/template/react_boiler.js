const Hooks = "import React, { useState } from 'react';\n" +
	"\n" +
	"function Example() {\n" +
	"  // Declare a new state variable, which we'll call \"count\"\n" +
	"\tconst [count, setCount] = useState(0);\n" +
	"\n" +
	"\treturn (\n" +
	"\t\t<div>\n" +
	"\t\t\t<p>You clicked {count} times</p>\n" +
	"\t\t\t<button onClick={() => setCount(count + 1)}>\n" +
	"\t\t\t\tClick me\n" +
	"\t\t\t</button>\n" +
	"\t\t</div>\n" +
	"\t);\n" +
	"}"

const ButtonComponent = "const Button = (title, onClick) => {\n" +
	"\treturn(\n" +
	"\t\t<button onClick={onClick}> {title} </button>\n" +
	"\t)\n" +
	"}"

const reactBoilerList = [{
	name: "ButtonComponent",
	value: ButtonComponent
}, {
	name: "Hooks",
	value: Hooks
}]

module.exports = {reactBoilerList: reactBoilerList}
