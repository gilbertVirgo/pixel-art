import React from "react";

import { SketchPicker } from "react-color";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const Toolbar = ({ brush }) => {
	const [brushSize, setBrushSize] = React.useState(8);
	const [brushColor, setBrushColor] = React.useState("black");

	React.useEffect(() => {
		brush.setSize(brushSize);
	}, [brush, brushSize]);

	React.useEffect(() => {
		console.log(brushColor);

		brush.setColor(brushColor);
	}, [brush, brushColor]);

	return (
		<div style={{ width: 400 }}>
			<h3>Brush</h3>
			<Form.Group>
				<Row>
					<Col>
						<Form.Label>Size (px)</Form.Label>
						<Form.Control
							type="number"
							value={brushSize}
							onChange={({ target: { value } }) =>
								setBrushSize(value)
							}
						/>
					</Col>
					<Col>
						<Form.Label>Color (px)</Form.Label>
						<Form.Control
							type="color"
							value={brushColor}
							onChange={({ target: { value } }) =>
								setBrushColor(value)
							}
						/>
					</Col>
				</Row>
			</Form.Group>
		</div>
	);
};

export default Toolbar;
