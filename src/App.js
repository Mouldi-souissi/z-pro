import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Subjects from "./components/Subjects";
import Courses from "./components/Courses";
import CourseStart from "./components/CourseStart";

function App() {
	return (
		<div className='App'>
			<Router>
				<Route path='/' render={() => <Navbar />} />
				<Switch>
					<Route exact path='/subjects' render={() => <Subjects />} />
					<Route exact path='/subjects/:subject' render={() => <Courses />} />
					<Route
						exact
						path='/subjects/:subject/:course/'
						render={() => <CourseStart />}
					/>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
