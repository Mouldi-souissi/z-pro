import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { withRouter } from "react-router";
import $ from "jquery";

export class Navbar extends Component {
	handleLogout = () => {
		window.localStorage.removeItem("token");
		this.props.history.push("/");
		// window.location.reload(false);
	};

	componentDidMount() {
		function checkScroll() {
			var startY = $(".navbar").height() * 2; //The point where the navbar changes in px

			if ($(window).scrollTop() > startY) {
				$(".navbar").addClass("scrolled");
			} else {
				$(".navbar").removeClass("scrolled");
			}
		}

		if ($(".navbar").length > 0) {
			$(window).on("scroll load resize", function () {
				checkScroll();
			});
		}

		$(window).click(function (e) {
			if ($(".navbar-collapse").hasClass("show")) {
				$(".navbar-collapse").removeClass("show");
				e.preventDefault();
			}
		});
		$(".navbar-collapse").click(function (event) {
			event.stopPropagation();
		});
	}

	render() {
		return (
			<nav className='navbar navbar-light navbar-expand-lg'>
				<div className='container-fluid'>
					{/* <Link className='navbar-brand font-weight-bold' to='/'>
						<img alt='logo' src={logoE} className='logoE' />
					</Link> */}
					<h1>Z-pro</h1>
					<button
						data-toggle='collapse'
						className='navbar-toggler'
						data-target='#navcol-1'>
						<span className='sr-only'>Toggle navigation</span>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navcol-1'>
						<div className='pl-2'>
							<ul className='nav navbar-nav'>
								<li id='home' className='nav-item' role='presentation'>
									<NavLink
										exact
										className='nav-link'
										to='/'
										activeclassname='active'>
										HOME
									</NavLink>
								</li>

								<li id='subjects' className='nav-item' role='presentation'>
									<NavLink
										className='nav-link'
										to='/subjects'
										activeclassname='active'>
										SUBJECTS
									</NavLink>
								</li>
								{/* <li id='dashboard' className='nav-item' role='presentation'>
									<NavLink
										className='nav-link'
										to='dashboard'
										activeclassname='active'>
										DASHBOARD
									</NavLink>
								</li> */}
								<li id='contact' className='nav-item' role='presentation'>
									<NavLink
										className='nav-link'
										to='/contactUs'
										activeclassname='active'>
										CONTACT US
									</NavLink>
								</li>
							</ul>
						</div>
						<div role='navigation' className='mt-3 mt-lg-0 mt-md-0 ml-auto p-2'>
							<div className='d-flex'>
								<Link to='/dashboard'>
									<div className='avatar-nav'>
										<i className='fa fa-circle greenDot' aria-hidden='true'></i>
									</div>
								</Link>
								<div className='nav-link'>Student</div>
								<button className='btn btn-success' type='button'>
									<i
										className='fa fa-sign-out mr-1'
										aria-hidden='true'
										style={{ color: "white" }}
									/>
									Exit
								</button>
							</div>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}

export default withRouter(Navbar);
