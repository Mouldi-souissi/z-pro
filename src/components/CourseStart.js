import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ca1 from "../assets/ca1.png";
import ca2 from "../assets/ca2.png";
import ca3 from "../assets/ca3.png";
import ca4 from "../assets/ca4.png";
import ca5 from "../assets/ca5.png";
import c1 from "../assets/c1.png";

export class CourseStart extends Component {
	z;
	render() {
		return (
			<div className='innerCourse'>
				<div className='headingCourse pt-3 pb-5'>
					<h4 className='ml-5'>{this.props.match.params.course}</h4>
					<img alt='course' src={c1} className='ml-5 mt-2 mb-3' />
				</div>

				<div className='container mt-5'>
					<h4>Progress</h4>
					<div className='progress mb-5' style={{ width: "40%" }}>
						<div
							className='progress-bar progress-bar-striped progress-bar-animated'
							role='progressbar'
							aria-valuenow='75'
							aria-valuemin='0'
							aria-valuemax='100'
							style={{ width: "75%" }}></div>
					</div>
					<div className='row'>
						<div className='col-md-12'>
							<div>
								<ul className='nav nav-tabs' id='myTab'>
									<li className='nav-item'>
										<div
											onClick={(e) =>
												localStorage.setItem(
													"activeTab",
													e.target.getAttribute("name")
												)
											}
											name='0'
											className='nav-link active'
											role='tab'
											data-toggle='tab'
											href='#tab-1'>
											Engage&nbsp;
											{/* <span className='badge badge-pill badge-primary'>
												{students.length}
											</span> */}
										</div>
									</li>
									<li className='nav-item'>
										<div
											onClick={(e) =>
												localStorage.setItem(
													"activeTab",
													e.target.getAttribute("name")
												)
											}
											name='1'
											className='nav-link'
											role='tab'
											data-toggle='tab'
											href='#tab-2'>
											Explore&nbsp;
											{/* <span className='badge badge-pill badge-primary'>
												{instructors.length}
											</span> */}
										</div>
									</li>
									<li className='nav-item'>
										<div
											onClick={(e) =>
												localStorage.setItem(
													"activeTab",
													e.target.getAttribute("name")
												)
											}
											name='2'
											className='nav-link'
											role='tab'
											data-toggle='tab'
											href='#tab-3'>
											Explain&nbsp;
											{/* <span className='badge badge-pill badge-primary'>
												{enrollments.length}
											</span> */}
										</div>
									</li>
									<li className='nav-item'>
										<div
											onClick={(e) =>
												localStorage.setItem(
													"activeTab",
													e.target.getAttribute("name")
												)
											}
											name='3'
											className='nav-link'
											role='tab'
											data-toggle='tab'
											href='#tab-4'>
											Elaborate&nbsp;
											{/* <span className='badge badge-pill badge-primary'>
												{courses.length}
											</span> */}
										</div>
									</li>
									<li className='nav-item'>
										<div
											onClick={(e) =>
												localStorage.setItem(
													"activeTab",
													e.target.getAttribute("name")
												)
											}
											name='4'
											className='nav-link'
											role='tab'
											data-toggle='tab'
											href='#tab-5'>
											Evaluate&nbsp;
										</div>
									</li>
								</ul>
								<div className='tab-content'>
									<div className='tab-pane active' role='tabpanel' id='tab-1'>
										<div className='mt-5 mb-5 ml-3'>
											<img alt='pic1' src={ca1} />
										</div>
									</div>
									<div className='tab-pane' role='tabpanel' id='tab-2'>
										<div className='mt-5 mb-5 ml-5'>
											<img alt='pic1' src={ca2} />
										</div>
									</div>
									<div className='tab-pane' role='tabpanel' id='tab-3'>
										<div className='mt-5 mb-5 ml-5'>
											<img alt='pic1' src={ca3} />
										</div>
									</div>
									<div className='tab-pane' role='tabpanel' id='tab-4'>
										<div className='mt-5 mb-5 ml-5'>
											<img alt='pic1' src={ca4} />
										</div>
									</div>
									<div className='tab-pane' role='tabpanel' id='tab-5'>
										<div className='mt-5 mb-5 ml-5'>
											<img alt='pic1' src={ca5} />
										</div>
									</div>
									<button className='btn btn-primary float-right mt-5 mb-5'>
										Mark Complete
									</button>
								</div>
								{/* <button
								className='btn btn-primary float-right mt-5 mb-5 nav-link'
								role='tab'
								data-toggle='tab'
								href='#tab-2'>
								Next
							</button> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(CourseStart);
