const fuzzy = require("fuzzy")

const tsGetStaticProps = "\n export const getStaticProps: GetStaticProps = async () => { // must be async \n" +
	"return { \n " +
	"	props: { \n " +
	"		host: process.env.DB_HOST.toString(), \n" +
	"	}, \n" +
	"}; \n" +
"};"

const tsGetServerSideProps = "export const getServerSideProps:GetServerSideProps = async (ctx) => {\n" +
	"\n" +
	"    return {\n" +
	"        props:{\n" +
	"            data:null\n" +
	"        }\n" +
	"    }\n" +
	"}\n" +
	"\n"

const tsGetStaticPath = "export const getStaticPaths:GetStaticPaths = async () => {\n" +
	"\n" +
	"    return {\n" +
	"        paths:[],\n" +
	"        fallback:false\n" +
	"    }\n" +
	"}"

const nextTsArrowServerSideProps = "import { GetServerSideProps } from 'next';\n" +
	"\n" +
	"const name = () => {\n" +
	"    return (\n" +
	"        <div>\n" +
	"            Enter\n" +
	"        </div>\n" +
	"    );\n" +
	"}\n" +
	"\n" +
	"\n" +
	"export const getServerSideProps:GetServerSideProps = async (ctx) => {\n" +
	"\n" +
	"\n" +
	"    return {\n" +
	"        props:{\n" +
	"            data:null\n" +
	"        }\n" +
	"    }\n" +
	"}\n" +
	"\n" +
	"export default name;"

const nextTsArrowStaticProps = "import {GetStaticProps} from 'next';\n" +
	"\n" +
	"const name = () => {\n" +
	"    return (\n" +
	"        <div>\n" +
	"            Enter\n" +
	"        </div>\n" +
	"    );\n" +
	"}\n" +
	"\n" +
	"export const getStaticProps:GetStaticProps = async (ctx) => {\n" +
	"\n" +
	"\n" +
	"    return {\n" +
	"        props:{\n" +
	"            data:null\n" +
	"        }\n" +
	"    }\n" +
	"}\n" +
	"\n" +
	"export default name;"

const nextTsCustomApp = "import {AppProps} from 'next/app'\n" +
	"\n" +
	"const MyApp = ({ Component, pageProps }:AppProps) => {\n" +
	"    return <Component {...pageProps} />\n" +
	"}\n" +
	"\n" +
	"export default MyApp;"

const nextTsCustomDoc = "import Document, { Html, Head, Main, NextScript } from 'next/document'\n" +
	"\n" +
	"class MyDocument extends Document {\n" +
	"    static async getInitialProps(ctx) {\n" +
	"        const initialProps = await Document.getInitialProps(ctx)\n" +
	"        return { ...initialProps }\n" +
	"}\n" +
	"\n" +
	"    render() {\n" +
	"        return (\n" +
	"            <Html>\n" +
	"                <Head/>\n" +
	"                <body>\n" +
	"                    <Main />\n" +
	"                    <NextScript />\n" +
	"                </body>\n" +
	"            </Html>\n" +
	"        )\n" +
	"    }\n" +
	"}\n" +
	"\n" +
	"export default MyDocument;"

const nextTsApiRoute = "import { NextApiRequest, NextApiResponse } from 'next';\n" +
	"\n" +
	"export default (req:NextApiRequest, res:NextApiResponse) => {\n" +
	"\n" +
	"    req.statusCode = 200\n" +
	"\n" +
	"\n" +
	"}"

const nextArrowFunctionStaticGeneration = "import {GetStaticPaths,GetStaticProps} from 'next';\n" +
	"\n" +
	"const name = () => {\n" +
	"    return (\n" +
	"        <div>\n" +
	"            Enter\n" +
	"        </div>\n" +
	"    );\n" +
	"}\n" +
	"\n" +
	"export const getStaticPaths:GetStaticPaths = async () => {\n" +
	"\n" +
	"\n" +
	"    return {\n" +
	"        paths:[],\n" +
	"        fallback:false\n" +
	"    }\n" +
	"}\n" +
	"export const getStaticProps:GetStaticProps = async (ctx) => {\n" +
	"\n" +
	"\n" +
	"    return {\n" +
	"        props:{\n" +
	"            data:null\n" +
	"        }\n" +
	"    }\n" +
	"}\n" +
	"\n" +
	"export default name;"
const tsNextTemplate = [{
	name: "tsGetStaticProps",
	value: tsGetStaticProps
},{
	name: "tsGetServerSideProps",
	value: tsGetServerSideProps
},{
	name: "tsGetStaticPath",
	value: tsGetStaticPath
},{
	name: "nextTsArrowServerSideProps",
	value: nextTsArrowServerSideProps
},{
	name: "nextTsArrowStaticProps",
	value: nextTsArrowStaticProps
},{
	name: "nextTsCustomApp",
	value: nextTsCustomApp
},{
	name: "nextTsCustomDoc",
	value: nextTsCustomDoc
},{
	name: "nextTsApiRoute",
	value: nextTsApiRoute
},{
	name: "nextArrowFunctionStaticGeneration",
	value: nextArrowFunctionStaticGeneration
}]

function searchTsNextTemplate(answers, input = '') {
	let choices = []
	for (const value of tsNextTemplate) {
		choices.push(value.name)
	}
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(fuzzy.filter(input, choices).map((el) => el.original));
		}, Math.random() * 470 + 30);
	});
}
module.exports = {tsNextTemplate: tsNextTemplate, searchTsNextTemplate: searchTsNextTemplate}

