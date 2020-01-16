import React from "react";
import Toolbar from "../components/Toolbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Brush from "../brush";
import { applyImageURI } from "../functions";

const EditProject = ({ uid }) => {
	const scale = 10;
	const canvas = React.useRef(null);
	const [context, setContext] = React.useState(null);
	const [data, setData] = React.useState({ width: 0, height: 0 });
	const [brush, setBrush] = React.useState(null);

	const handleSave = () => {
		const projects = JSON.parse(localStorage.getItem("projects"));
		const index = projects.findIndex(
			({ uid: projectId }) => projectId === uid
		);

		projects[index].uri = context.canvas.toDataURL("image/png", 1);

		localStorage.setItem("projects", JSON.stringify(projects));
	};

	React.useEffect(() => {
		const projects = JSON.parse(window.localStorage.getItem("projects"));

		if (projects) {
			setData(projects.find(({ uid: projectId }) => projectId === uid));
		} else {
		}
	}, []);

	React.useEffect(() => {
		if (canvas.current) {
			setContext(canvas.current.getContext("2d"));
		}
	}, [canvas]);

	React.useEffect(() => {
		if (context) {
			if (data) {
				applyImageURI({ uri: data.uri, context });
			}

			let brush = new Brush();
			brush.init(context);

			setBrush(brush);
		}
	}, [context, data]);

	return (
		<React.Fragment>
			<h1>Edit Project</h1>
			<hr />
			{brush && <Toolbar brush={brush} />}
			<Form.Group>
				<canvas
					style={{ border: "2px solid lightgray", display: "block" }}
					width={scale * data.width}
					height={scale * data.height}
					ref={canvas}
				/>
			</Form.Group>
			<Form.Group>
				<Button onClick={handleSave}>Save</Button>
			</Form.Group>
		</React.Fragment>
	);
};

export default EditProject;
