import logo from '../../../assets/logo.svg';
//({ title }: { title: string })
function LandingPage({msg}: { msg: String }) {
	return (
		<div className="layout-content">
		<img alt="Schwaasz logo" src={logo} />

		<div className="hello">
			<h1>{msg}</h1>
			<p>
				click the DOG button to navigate to the sheet data template
			</p>
		</div>
		</div>
	)
}

export default LandingPage;