import React, { Component } from "react";

export class Subject extends Component {
	render() {
		let { icon, title, text } = this.props.subject;
		return (
			<div className='col-auto'>
				<div className={`card ${title}`}>
					<div className='face face1'>
						<div className='content'>
							<div className='icon'>
								<i className={icon} aria-hidden='true'></i>
								<h2>{title}</h2>
							</div>
						</div>
					</div>
					<div className='face face2'>
						<div className='content'>
							<p>{text}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Subject;
