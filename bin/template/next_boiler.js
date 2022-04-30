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

const nextBoilerList = [{
	name: "getServerSideProps",
	value: getServerSideProps
}, {
	name: "getStaticProps",
	value: getStaticProps
}]

module.exports = {nextBoilerList: nextBoilerList}
