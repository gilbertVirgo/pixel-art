import React from "react";

import { withRouter } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import uuidv1 from "uuid/v1";

const CreateProject = ({ history }) => {
	const [width, setWidth] = React.useState("50");
	const [height, setHeight] = React.useState("50");

	const handleNext = () => {
		const uid = uuidv1();
		const project = {
			uid,
			width,
			height,
			uri: ""
		};

		let projects = [];

		if (localStorage.getItem("projects")) {
			projects = JSON.parse(localStorage.getItem("projects"));
		}

		localStorage.setItem(
			"projects",
			JSON.stringify(projects.concat(project))
		);
		history.push(`edit/${uid}`);
	};

	React.useEffect(() => {
		console.log({ width, height });
	}, [width, height]);

	return (
		<React.Fragment>
			<h1>Create a project</h1>
			<hr />
			<Form>
				<Form.Group>
					<Form.Row>
						<Form.Label>Width (px)</Form.Label>
						<Form.Control
							type="number"
							placeholder="Enter width"
							value={width}
							onChange={({ target: { value } }) =>
								setWidth(value)
							}
						/>
					</Form.Row>
				</Form.Group>
				<Form.Group>
					<Form.Row>
						<Form.Label>Height (px)</Form.Label>
						<Form.Control
							type="number"
							placeholder="Enter height"
							value={height}
							onChange={({ target: { value } }) =>
								setHeight(value)
							}
						/>
					</Form.Row>
				</Form.Group>
				<Form.Group>
					<Button onClick={handleNext}>Start</Button>
				</Form.Group>
			</Form>
		</React.Fragment>
	);
};

export default withRouter(CreateProject);
