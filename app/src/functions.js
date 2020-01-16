export const applyImageURI = ({ uri, context }) => {
	const {
		canvas: { width, height }
	} = context;

	const image = new Image();
	image.src = uri;

	image.addEventListener("load", () => {
		context.drawImage(image, 0, 0, width, height);
	});
};
