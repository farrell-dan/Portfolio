import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from "./AboutMe";
import ContactMe from "./Contact";
import Home from "./Me";
import Projects from "./Projects";
import MySportsCal from "./Projects/mySportsCal";
import NavBar from "./NavBar/NavBar";
import styled from "styled-components";
import ProjectSlingair from "./Projects/projectSlingAir";
import Me from "./Me";
import ECommerceProject from "./Projects/eCommerceProject";

const App = () => {
	return (
		<Router>
			<AppContainer>
				<NavBar />
				<ContentContainer>
				<Me />
			<AboutMe />
			<Projects />
			<ContactMe />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/mySportsCal" element={<MySportsCal />} />
						<Route path="/projectSlingAir" element={<ProjectSlingair />} />
						<Route path="/eCommerceProject" element={<ECommerceProject />} />
					</Routes>
				</ContentContainer>
			</AppContainer>
		</Router>
	);
};
export default App;

const AppContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
`;

const NavBarContainer = styled.div`
	z-index: 1;
`;

const ContentContainer = styled.div`
	flex-grow: 1;
	min-height: calc(100vh - 60px);
`;
