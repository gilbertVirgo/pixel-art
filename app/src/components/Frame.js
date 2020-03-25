import React from "react";
import { applyImageURI } from "../functions";
import Brush from "../brush";
import Toolbar from "./Toolbar";
import Button from "react-bootstrap/Button";

const getProjects = () => {
	return JSON.parse(window.localStorage.getItem("projects"));
};

const getProjectIndex = uid => {
	const projects = getProjects();
	const index = projects.findIndex(({ uid: projectId }) => projectId === uid);

	return index;
};

const Frame = ({ data, width, height, onSave }) => {
	const scale = 10;
	const ref = React.useRef(null);
	const [brush, setBrush] = React.useState(null);
	const [context, setContext] = React.useState(null);

	const handleSave = () => {
		if (ref.current !== null) onSave(ref.current.toDataURL("image/png", 1));
	};

	React.useEffect(() => {
		if (ref.current !== null) {
			const canvas = ref.current;
			setContext(canvas.getContext("2d"));
		}
	}, [ref]);

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
		<div style={{ float: "left", margin: "15px 15px 15px 0" }}>
			{brush && <Toolbar brush={brush} />}
			<canvas
				style={{ border: "2px solid lightgray", display: "block" }}
				ref={ref}
				width={width * scale}
				height={height * scale}
			/>
			<Button style={{ marginTop: "15px" }} onClick={handleSave}>
				Save
			</Button>
		</div>
	);
};

export default Frame;
