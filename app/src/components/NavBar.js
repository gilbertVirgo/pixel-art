import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavBar = () => (
	<Navbar bg="light" expand="lg">
		<Navbar.Brand href="/">Pixel Art | Texture</Navbar.Brand>
		<Navbar.Toggle aria-controls="basic-navbar-nav" />
		<Navbar.Collapse id="basic-navbar-nav">
			<Nav className="mr-auto">
				<Nav.Link href="/">Home</Nav.Link>
				<Nav.Link href="/projects">Projects</Nav.Link>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
);

export default NavBar;
