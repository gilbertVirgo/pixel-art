import React from "react";

import { Link } from "react-router-dom";

import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

const Home = () => {
	return (
		<React.Fragment>
			<h1>Welcome to Pixel Editor</h1>
			<p>Needs a better name...</p>
			<Jumbotron>
				<h2>Create a new project</h2>
				<Link to="create">
					<Button>Go</Button>
				</Link>
			</Jumbotron>
			<Jumbotron>
				<h2>View your previous projects</h2>
				<Link to="create">
					<Button>Go</Button>
				</Link>
			</Jumbotron>
		</React.Fragment>
	);
};

export default Home;
