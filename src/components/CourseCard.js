import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import c1 from "../assets/c1.png";
import c2 from "../assets/c2.jpg";
import c3 from "../assets/c3.jpg";

export class CourseCard extends Component {
	img = () => {
		switch (this.props.course.title) {
			case "Robotics Part 1":
				return c1;
			case "Robotics Part 2":
				return c3;
			case "Robotics Part 3":
				return c2;
			default:
				return c1;
		}
	};
	render() {
		let { title, text, status } = this.props.course;
		return (
			<div className='col-auto mb-4 mt-4'>
				<div className='card h-100 shadow-sm' style={{ width: "326px" }}>
					<div
						className='image'
						style={{
							backgroundImage: `url(${this.img()})`,
							backgroundSize: "cover",
							backgroundPosition: "center center",
							backgroundRepeat: "no-repeat",
							minHeight: "250px",
							maxWidth: "326px",
						}}></div>
					{/* <svg
						className='bd-placeholder-img card-img-top'
						width='100%'
						height='225'
						xmlns='http://www.w3.org/2000/svg'
						preserveAspectRatio='xMidYMid slice'
						focusable='false'
						role='img'
						aria-label='Placeholder: Thumbnail'>
						<title>Placeholder</title>
						<rect width='100%' height='100%' fill='#55595c' />
					</svg> */}

					<div className='card-body'>
						<h5 className='card-title'>{title}</h5>
						<p className='card-text mb-5'>{text}</p>
						<div className='d-flex justify-content-between align-items-center'>
							<div
								className='btn-group'
								style={{ position: "absolute", bottom: "20px" }}>
								{status ? (
									<Link
										to={`/subjects/${this.props.match.params.subject}/${title}`}>
										<button type='button' className='btn btn-primary mr-1'>
											Start
										</button>
									</Link>
								) : (
									<div className='d-flex align-items-baseline'>
										<h6 className='mr-2'>Locked</h6>
										<i className='fa fa-lock' aria-hidden='true'></i>
									</div>
								)}
							</div>
							<small
								className='text-muted'
								style={{ position: "absolute", bottom: "20px", right: "10px" }}>
								13-06-2020
							</small>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(CourseCard);
