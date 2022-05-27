const fuzzy = require("fuzzy")

const getServerSideProps = "export const getServerSideProps = async (ctx) => {\n" +
	"\n" +
	"\n" +
	"  return {\n" +
	"    props:{\n" +
	"      data:null\n" +
	"    }\n" +
	"  }\n" +
	"}"
const getStaticProps = "export const getStaticProps = async (ctx) => {\n" +
	"\n" +
	"\n" +
	"  return {\n" +
	"    props:{\n" +
	"      data:null\n" +
	"    }\n" +
	"  }\n" +
	"}"

const getInitialProps = "index.getInitialProps = async (ctx) => {\n" +
	"\n" +
	"  return {\n" +
	"    data:null\n" +
	"  }\n" +
	"}"

const getStaticPaths = "export const getStaticPaths = async () => {\n" +
	"\n" +
	"\n" +
	"  return {\n" +
	"    paths:[],\n" +
	"    fallback:false\n" +
	"  }\n" +
	"}"

const nextCustomApp = "// import App from 'next/app'\n" +
	"\n" +
	"const MyApp = ({ Component, pageProps }) => {\n" +
	"  return <Component {...pageProps} />\n" +
	"}\n" +
	"\n" +
	"//MyApp.getInitialProps = async (appContext) => {\n" +
	"//\t// calls page's `getInitialProps` and fills `appProps.pageProps`\n" +
	"//\tconst appProps = await App.getInitialProps(appContext);\n" +
	"//\treturn { ...appProps }\n" +
	"// }\n" +
	"\n" +
	"export default MyApp;"

const nextCustomDocument = "import Document, { Html, Head, Main, NextScript } from 'next/document'\n" +
	"\n" +
	"class MyDocument extends Document {\n" +
	"  static async getInitialProps(ctx) {\n" +
	"    const initialProps = await Document.getInitialProps(ctx)\n" +
	"    return { ...initialProps }\n" +
	"}\n" +
	"\n" +
	"  render() {\n" +
	"    return (\n" +
	"      <Html>\n" +
	"        <Head/>\n" +
	"        <body>\n" +
	"          <Main />\n" +
	"          <NextScript />\n" +
	"        </body>\n" +
	"      </Html>\n" +
	"    )\n" +
	"  }\n" +
	"}\n" +
	"\n" +
	"export default MyDocument;"


const nextArrowGetServerSide = "const index = () => {\n" +
	"  return (\n" +
	"    <div>\n" +
	"      Enter\n" +
	"    </div>\n" +
	"  );\n" +
	"}\n" +
	"\n" +
	"\n" +
	"export const getServerSideProps = async (ctx) => {\n" +
	"\n" +
	"\n" +
	"  return {\n" +
	"    props:{\n" +
	"      data:null\n" +
	"    }\n" +
	"  }\n" +
	"}\n" +
	"\n" +
	"export default index;"

const nextArrowStaticProps = "const index = () => {\n" +
	"  return (\n" +
	"    <div>\n" +
	"      Enter\n" +
	"    </div>\n" +
	"  );\n" +
	"}\n" +
	"\n" +
	"export const getStaticProps = async (ctx) => {\n" +
	"\n" +
	"\n" +
	"  return {\n" +
	"    props:{\n" +
	"      data:null\n" +
	"    }\n" +
	"  }\n" +
	"}\n" +
	"\n" +
	"export default index;"

const nextFunctionalGetServerSide = "function index() {\n" +
	"  return (\n" +
	"    <div>\n" +
	"      Enter\n" +
	"    </div>\n" +
	"  );\n" +
	"}\n" +
	"\n" +
	"export async function getServerSideProps(ctx){\n" +
	"\n" +
	"\n" +
	"  return {\n" +
	"    props:{\n" +
	"      data:null\n" +
	"    }\n" +
	"  }\n" +
	"}\n" +
	"\n" +
	"export default index;"

const nextFunctionalStaticProps = "function index() {\n" +
	"  return (\n" +
	"    <div>\n" +
	"      Enter\n" +
	"    </div>\n" +
	"  );\n" +
	"}\n" +
	"\n" +
	"export async function getStaticProps(ctx){\n" +
	"\n" +
	"\n" +
	"  return {\n" +
	"    props:{\n" +
	"      data:null\n" +
	"    }\n" +
	"  }\n" +
	"}\n" +
	"\n" +
	"export default index;"

const nextArrowFunctionStaticGeneration = "const index = () => {\n" +
	"  return (\n" +
	"    <div>\n" +
	"      Enter\n" +
	"    </div>\n" +
	"  );\n" +
	"}\n" +
	"\n" +
	"export const getStaticPaths = async () => {\n" +
	"\n" +
	"\n" +
	"  return {\n" +
	"    paths:[],\n" +
	"    fallback:false\n" +
	"  }\n" +
	"}\n" +
	"export const getStaticProps = async (ctx) => {\n" +
	"\n" +
	"\n" +
	"  return {\n" +
	"    props:{\n" +
	"      data:null\n" +
	"    }\n" +
	"  }\n" +
	"}\n" +
	"\n" +
	"export default index;"


const jsNextTemplate = [{
	name: "getServerSideProps",
	value: getServerSideProps
}, {
	name: "getStaticProps",
	value: getStaticProps,
}, {
	name: "getInitialProps",
	value: getInitialProps
}, {
	name: "getStaticPaths",
	value: getStaticPaths
}, {
	name: "nextCustomApp",
	value: nextCustomApp
}, {
	name: "nextCustomDocument",
	value: nextCustomDocument
}, {
	name: "nextArrowGetServerSide",
	value: nextArrowGetServerSide
}, {
	name: "nextArrowStaticProps",
	value: nextArrowStaticProps
}, {
	name: "nextFunctionalGetServerSide",
	value: nextFunctionalGetServerSide
}, {
	name: "nextFunctionalStaticProps",
	value: nextFunctionalStaticProps
}, {
	name: "nextArrowFunctionStaticGeneration",
	value: nextArrowFunctionStaticGeneration
}
]


function searchJsNextTemplate(answers, input = '') {
	let choices = []
	for (const value of jsNextTemplate) {
		choices.push(value.name)
	}
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(fuzzy.filter(input, choices).map((el) => el.original));
		}, Math.random() * 470 + 30);
	});
}

module.exports = {jsNextTemplate: jsNextTemplate, searchJsNextTemplate: searchJsNextTemplate}

