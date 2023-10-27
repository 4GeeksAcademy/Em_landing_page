import React from "react";

//include images into your bundle
import Nav from "./Nav";
import Jumbotron from "./Jumbotron";
import Card from "./Card";

//create your first component
const Home = () => {
	return (
		<>
			<Nav />
			<Jumbotron />
			<div class="card-group">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</>
	);
};

export default Home;
