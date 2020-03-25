import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Frame from "../components/Frame";

const getProjects = () => {
	return JSON.parse(window.localStorage.getItem("projects"));
};

const getProjectIndex = uid => {
	const projects = getProjects();
	const index = projects.findIndex(({ uid: projectId }) => projectId === uid);

	return index;
};

const saveProjects = projects => {
	window.localStorage.setItem("projects", JSON.stringify(projects));
};

const EditProject = ({ uid }) => {
	const [data, setData] = React.useState({ width: 0, height: 0, frames: [] });

	const handleSave = ({ uri, frameIndex }) => {
		const projects = getProjects();
		const index = getProjectIndex(uri);

		console.log("project", projects[index]);

		projects[index].frames[frameIndex].uri = uri;

		saveProjects(projects);
	};

	const handleAddFrame = () => {
		const projects = getProjects();
		const index = getProjectIndex(uid);

		projects[index].frames.push({
			uri: ""
		});

		saveProjects(projects);
		window.location.reload();
	};

	React.useEffect(() => {
		const projects = getProjects();
		const index = getProjectIndex(uid);

		if (projects) {
			setData(projects[index]);
		}
	}, [uid]);

	return (
		<React.Fragment>
			<h1>Edit Project</h1>
			<hr />
			{data && (
				<div style={{ clear: "both" }}>
					{data.frames.map((frame, frameIndex) => (
						<Frame
							data={frame}
							width={data.width}
							height={data.height}
							onSave={uri => handleSave({ uri, frameIndex })}
						/>
					))}
				</div>
			)}
			<Form.Group style={{ clear: "both" }}>
				<Button variant="secondary" onClick={handleAddFrame}>
					Add Frame
				</Button>
			</Form.Group>
		</React.Fragment>
	);
};

export default EditProject;
