const MainPage = () => {
	return(
		<div>
			<p> Only an dummy function</p>
		</div>
	)
}

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}