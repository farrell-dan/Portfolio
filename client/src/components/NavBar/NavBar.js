import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";
import "./NavBar.css";

const NavBar = () => {
	const location = useLocation();

	useEffect(() => {
		const primaryNav = document.querySelector(".primary-navigation");
		const navToggle = document.querySelector(".mobile-nav-toggle");

		navToggle.addEventListener("click", () => {
			const visibility = primaryNav.getAttribute("data-visible");

			if (visibility === "false") {
				primaryNav.setAttribute("data-visible", "true");
				navToggle.setAttribute("aria-expanded", "true");
			} else if (visibility === "true") {
				primaryNav.setAttribute("data-visible", "false");
				navToggle.setAttribute("aria-expanded", "false");
			}
		});
	}, []);

	var resizeTimer = window.addEventListener("resize", () => {
		document.body.classList.add("resize-animation-stopper");
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(() => {
			document.body.classList.remove("resize-animation-stopper");
		}, 400);
	});

	const scrollToSection = (id) => {
		const targetElement = document.getElementById(id);
	
		if (targetElement) {
		  targetElement.scrollIntoView({
			behavior: "smooth",
			block: "center", 
		  });
		}
	  };


	const closeMenu = () => {
		const primaryNav = document.querySelector(".primary-navigation");
		primaryNav.setAttribute("data-visible", "false");
	};

	return (
		<div>
			<button
				className="mobile-nav-toggle"
				aria-controls="primary-navigation"
				aria-expanded="false"
			>
				<span className="sr-only"></span>
			</button>
			<StyledNav>
				<StyledUl
					id="primary-navigation"
					data-visible="false"
					className="primary-navigation flex"
				>
					<StyledLi className="nav__item">
						<StyledLink onClick={() => scrollToSection("home")} className="dropdown-label">
							Home
							<ul className="dropdown-content">
                <li className="dropdown-content--item" onClick={() => scrollToSection("home")} >Home</li>
                <li className="dropdown-content--item" onClick={() => scrollToSection("about")}>About Me</li>
                <li className="dropdown-content--item" onClick={() => scrollToSection("projects")}>Projects</li>
                <li className="dropdown-content--item" onClick={() => scrollToSection("contact")}>Contact Me</li>
              </ul>
						</StyledLink>
					</StyledLi>
					<StyledLi className="nav__item">
						<StyledLink onClick={() => scrollToSection("about")}>
							About Me
						</StyledLink>
					</StyledLi>
					<StyledLi className="nav__item">
						<StyledLink onClick={() => scrollToSection("projects")}>
							Projects
						</StyledLink>
					</StyledLi>
					<StyledLi className="nav__item">
						<StyledLink onClick={() => scrollToSection("contact")}>
							Contact
						</StyledLink>
					</StyledLi>

				</StyledUl>
			</StyledNav>
		</div>
	);
};

export default NavBar;

const StyledNav = styled.nav`
position: fixed;
z-index: 100;
top: 0;
right: 0;
width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-end;
	align-items: center;
	min-height: 5rem;
	background-color: #040a1d;
	--gap: 0;
`;

const StyledUl = styled.ul`
	display: flex;
	justify-content: right;
	width: 100%;
`;

const StyledLi = styled.li`
	display: flex;
	align-items: center;
	margin-right: 2rem;

	@media (max-width: 616px) {
		margin-right: 0;
	}
`;

const StyledLink = styled.a`
	text-decoration: none;
	color: #c5c6c6;
	cursor: pointer;
	font-size: 1.5rem;
	font-family: "Roboto", sans-serif;

	&:hover {
		background-color: #23233b;
	}
`;
