import { Link } from "react-router-dom";
import styled from "styled-components";
import'./NavBar.css';

const NavBar = () => {
	return (
		<>
			<button
				className="mobile-nav-toggle"
				aria-controls="primary-navigation"
				aria-expanded="false"
			>

				<span className="sr-only">Menu</span>
			</button>
			<StyledNav>
				<StyledUl id="primary-navigation" className="primary-navigation">
					<StyledLi>
						<StyledLink to="/">Home</StyledLink>
					</StyledLi>
					<StyledLi>
						<StyledLink to="/about-me">About Me</StyledLink>
					</StyledLi>
					<StyledLi>
						<StyledLink to="/projects">Projects</StyledLink>
					</StyledLi>
					<StyledLi>
						<StyledLink to="/contact">Contact Me</StyledLink>
					</StyledLi>
				</StyledUl>
			</StyledNav>
		</>
	);
};

export default NavBar;

const StyledNav = styled.nav`
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-end;
	align-items: center;
	min-height: 8vh;
	background-color: #040a1d;
`;

const StyledUl = styled.ul`
	display: flex;
	list-style: none;
	margin: 0;
	padding: 1rem;
	margin-right: 3rem;
	gap: 3rem;

	@media (max-width: 604px) {
		flex-direction: column;
		position: fixed;
		margin-right: 0;
		inset: 0 0 0 30%;
		gap: 3rem;
		padding: ${(props) => `min(20vh, 10rem)`} 3rem;

		background: hsl(0 0% 0% / 0.75);

		.mobile-nav-toggle{
			position: absolute;
			background: red;
		}

		@supports (backdrop-filter: blur(1rem)) {
			background: hsl(0 0% 100% / 0.1);
			backdrop-filter: blur(1rem);
		}
	}
`;

const StyledLi = styled.li`
	display: flex;
	align-items: center;
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: #c5c6c6;
	cursor: pointer;
	font-size: 1.5rem;
	/* padding: 1.5rem; */
	font-family: "Roboto", sans-serif;

	&:hover {
		background-color: #23233b;
	}
`;
