import React from "react";

//include images into your bundle
import Nav from "./Nav";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<>
			<div className="container pt-5">
				<Nav />
				<Jumbotron />
				<div className="card-group">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<Footer/>
		</>
	);
};

export default Home
