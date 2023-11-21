import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
	return (
		<StyledNav>
			<StyledUl>
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
	);
};

export default NavBar;

const StyledNav = styled.nav`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	height: 8vh; 
	background-color:  #040a1d;
`;

const StyledUl = styled.ul`
	display: flex;
	list-style: none;
	margin: 0;
	padding: 0;
`;

const StyledLi = styled.li`
	display: flex;
	align-items: center;
    height: 100%;
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: #C5C6C6; 
	cursor: pointer;
	font-size: 3vh;
	padding: 20px; 
	font-family: 'Roboto', sans-serif; ;

	&:hover {
		background-color: #23233B;
	}
`;