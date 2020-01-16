import React from "react";

import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";

import { Link } from "react-router-dom";

const Projects = () => {
	const [projects, setProjects] = React.useState([]);

	React.useEffect(() => {
		if (window.localStorage) {
			let projects = JSON.parse(window.localStorage.getItem("projects"));
			setProjects(projects);
		}
	}, []);

	return (
		<React.Fragment>
			<h1>Projects</h1>
			<hr />
			<CardColumns>
				{projects.map(({ uid, uri }) => (
					<Link to={`/edit/${uid}`}>
						<Card>
							<Card.Body>
								<img
									style={{ display: "block", width: "100%" }}
									src={uri}
								/>
							</Card.Body>
							<Card.Footer>
								<p>{uid}</p>
							</Card.Footer>
						</Card>
					</Link>
				))}
			</CardColumns>
		</React.Fragment>
	);
};

export default Projects;
