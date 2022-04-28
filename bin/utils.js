function parseFileName(words) {
	var sentence = "";
	sentence = words + ".js"
	return sentence
}

const usage = "\nUsage: cli-fs cr file_name";

function showHelp() {
	console.log(usage);
	console.log('\nOptions:\r')
	console.log('\t--version\t      ' + 'Show version number.' + '\t\t' + '[boolean]\r')
	console.log('    -l, --list\t' + '              ' + 'List of templare.' + '\t\t' + '[boolean]\r')
	console.log('\t--help\t\t      ' + 'Show help.' + '\t\t\t' + '[boolean]\n')
}

function showTemplate() {
	console.log('\n Template list \n')
	console.log('0 \t getServerSideProps')
	console.log('1 \t getStaticProps')
}

module.exports = { parseFileName: parseFileName, showHelp: showHelp, getTemplate: getTemplate, showTemplate: showTemplate};

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

const template = [getServerSideProps, getStaticProps]

function getTemplate(option){
	const content = template[option]
	return content
}
