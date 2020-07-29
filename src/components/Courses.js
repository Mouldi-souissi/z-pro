import React, { Component } from "react";
import CourseCard from "./CourseCard";

export class Courses extends Component {
	state = {
		Programming: [
			{
				title: "Robotics Part 1",
				text:
					"Computer science deals with theory of computation, algorithms, computational problems and the design of computer systems hardware, software and applications.",

				status: true,
			},
			{
				title: "Robotics Part 2",
				text:
					"Mechanical engineering is an engineering branch that combines engineering physics and mathematics principles with materials science to design, analyze, manufacture, and maintain mechanical systems.",
				status: false,
			},
			{
				title: "Robotics Part 3",
				text:
					"Machine learning (ML) is the study of computer algorithms that improve automatically through experience.",
				status: false,
			},
		],
	};
	render() {
		return (
			<div className='container-fluid'>
				<div className='row justify-content-center'>
					{this.state.Programming.map((course) => (
						<CourseCard course={course} />
					))}
				</div>
			</div>
		);
	}
}

export default Courses;
