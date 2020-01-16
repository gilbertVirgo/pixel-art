import React from "react";

import Home from "./pages/Home";
import CreateProject from "./pages/CreateProject";
import EditProject from "./pages/EditProject";
import Projects from "./pages/Projects";

import { Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import NavBar from "./components/NavBar";

function App() {
	return (
		<React.Fragment>
			<NavBar />
			<Container style={{ marginTop: "15px" }}>
				<Switch>
					<Route exact path="/" render={() => <Home />} />
					<Route path="/create" render={() => <CreateProject />} />
					<Route
						path="/edit/:uid"
						render={({
							match: {
								params: { uid }
							}
						}) => <EditProject uid={uid} />}
					/>
					<Route path="/projects" render={() => <Projects />} />
				</Switch>
			</Container>
		</React.Fragment>
	);
}

export default App;
