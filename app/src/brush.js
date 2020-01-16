import $ from "jquery";

const offset = element => {
	let bounds = element.getBoundingClientRect();
	let { left, top } = bounds;

	return { left, top };
};

const Brush = function() {
	this.x = 0;
	this.y = 0;
	this.size = 1;
	this.scale = 10;
	this.active = false;
	this.cursor = null;
	this.color = "#000000";

	this.setSize = function(size) {
		this.size = size;
	};

	this.setColor = function(color) {
		this.color = color;
	};

	this.hover = function({ canvas, clientX, clientY }) {
		const left =
			Math.floor(clientX / this.scale) * this.scale +
			window.scrollX +
			"px";
		const top =
			Math.floor(clientY / this.scale) * this.scale +
			window.scrollY +
			"px";

		$(this.cursor).css({
			left,
			top,
			width: this.scale * this.size + "px",
			height: this.scale * this.size + "px",
			backgroundColor: this.color + "40"
		});
	};

	this.paint = function(context) {
		context.fillStyle = this.color;
		context.fillRect(
			this.x,
			this.y,
			this.scale * this.size,
			this.scale * this.size
		);
	};

	this.init = function(context) {
		const { canvas } = context;

		this.cursor = document.createElement("div");
		$(this.cursor).css({
			pointerEvents: "none",
			width: this.scale + "px",
			height: this.scale + "px",
			position: "absolute",
			zIndex: "100"
		});

		document.body.appendChild(this.cursor);

		canvas.addEventListener("mousedown", () => (this.active = true));
		canvas.addEventListener("mousemove", ({ clientX, clientY }) => {
			const { left, top } = offset(canvas);

			const x = clientX - left;
			const y = clientY - top;

			this.x = Math.floor(x / this.scale) * this.scale;
			this.y = Math.floor(y / this.scale) * this.scale;

			this.hover({ clientX, clientY, canvas });
			if (this.active) this.paint(context);
		});
		window.addEventListener("mouseup", () => (this.active = false));
	};
};

export default Brush;
