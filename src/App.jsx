import { Component } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet";
export default class App extends Component {
	render() {
		return (
			<>
				<Helmet>
					<link
						href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
						rel="stylesheet"
					/>
				</Helmet>
				<Navbar />
				<Footer />
			</>
		);
	}
}
