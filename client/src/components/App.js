import {
	BrowserRouter as Router,
	Routes as Switch,
	Route,
} from "react-router-dom";
import AboutMe from "./AboutMe";
 import ContactMe from "./Contact";
 import Home from "./Home";
 import Projects from "./Projects";
 import NavBar from "./NavBar/NavBar";
 import styled from "styled-components";

 const App = () => {
	return (
		<Router>
			<AppContainer>
					<NavBar />
				<ContentContainer>
						<Home />
						<AboutMe />
						<Projects />
						<ContactMe />
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