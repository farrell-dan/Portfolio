import AboutMe from "./Main Page/AboutMe";
import ContactMe from "./Main Page/Contact";
import Me from "./Main Page/Me";
import Projects from "./Main Page/Projects";
import styled from "styled-components";

const Home = () => {
	return (
		<>
			<Me />
			<AboutMe />
			<Projects />
			<ContactMe />
		</>
	);
};
export default Home;

const CenteredText = styled.h1 `

`;