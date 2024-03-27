import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from "./Main Page/AboutMe";
import ContactMe from "./Main Page/Contact";
import Home from "./Home";
import Projects from "./Main Page/Projects";
import MySportsCal from "./Projects/mySportsCal";
import NavBar from "./NavBar/NavBar";
import styled from "styled-components";
import ProjectSlingair from "./Projects/projectSlingAir";
import Me from "./Main Page/Me";
import ECommerceProject from "./Projects/eCommerceProject";
import Update from "./Update";

const App = () => {
	return (
		<Router>
			<AppContainer>
				<NavBar />
				<ContentContainer>
					{/* <Update />*/}
					<Routes> 
						<Route path="/" element={<Home />} />
						<Route path="/mySportsCal" element={<MySportsCal />} />
						<Route path="/Project SlingAir" element={<ProjectSlingair />} />
						<Route
							path="/E-Commerce Project"
							element={<ECommerceProject />}
						/>
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
