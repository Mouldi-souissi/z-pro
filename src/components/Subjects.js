import React, { Component } from "react";
import { Link } from "react-router-dom";
import Subject from "./Subject";

export class Subjects extends Component {
	state = {
		subjects: [
			{
				title: "Robotics",
				text:
					"The goal of robotics is to design intelligent machines that can help and assist humans in their day-to-day lives and keep everyone safe.",
				icon: "fa fa-android",
			},
			{
				title: "Mathematics",
				text:
					"Mathematics, the science of structure, order, and relation that has evolved from elemental practices of counting, measuring, and describing the shapes of objects.",
				icon: "fa fa-superscript",
			},
			{
				title: "Physics",
				text:
					"Physics is one of the most fundamental scientific disciplines, and its main goal is to understand how the universe behaves.",
				icon: "fa fa-rocket",
			},
			{
				title: "English",
				text:
					"There are about 375 million native speakers (people who use English as their first language),[4] which is the largest after Mandarin and Spanish.",
				icon: "fa fa-book",
			},
			{
				title: "History",
				text:
					"“If you don't know history, then you don't know anything. You are a leaf that doesn't know it is part of a tree. ” ― Michael Crichton",
				icon: "fa fa-history",
			},
			{
				title: "Geography",
				text:
					"Geography is a systematic study of the Universe and its features.",
				icon: "fa fa-globe",
			},
		],
	};
	render() {
		return (
			<div className='subjects'>
				<div className='container'>
					<div className='row justify-content-center'>
						{this.state.subjects.map((subject) => (
							<Link to={`/subjects/${subject.title}`}>
								<Subject subject={subject} />
							</Link>
						))}
					</div>
				</div>
			</div>
		);
	}
}

export default Subjects;
