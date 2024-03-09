import { useState } from "react";
import styled from "styled-components";
import DanielImage1 from "../assets/IMG_2243.JPG";
import DanielImage2 from "../assets/IMG_9209.jpeg";

const Home = () => {
	const [isHovered, setIsHovered] = useState(false);

	const handleHover = () => {
		setIsHovered(!isHovered);
	};

	return (
		<Container>
			<Content>
				<TextContainer>
					<MediumText>I am</MediumText>
					<BigText>Daniel Farrell</BigText>
					<MediumText>a Full Stack Web Developer</MediumText>
					<SmallText>Get to know me better!</SmallText>
				</TextContainer>
				<ImageContainer>
					<StyledImage
						src={isHovered ? DanielImage2 : DanielImage1}
						alt="Daniel Farrell"
						onMouseEnter={handleHover}
						onMouseLeave={handleHover}
					/>
				</ImageContainer>
			</Content>
		</Container>
	);
};

export default Home;


const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 80vw;
	margin: 5vh auto;
`;

const Content = styled.div`
	display: flex;
	background-color: #2c4268;
	border-radius: 10px;
`;

const TextContainer = styled.div`
	flex: 3;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	font-family: "Roboto", sans-serif;
`;

const BigText = styled.h1`
	font-size: 7vw;
	margin: 0;
	font-weight: 900;
	background: linear-gradient(#00A9E2, #7ccdf4);
	background-clip: text;
	background: -webkit-linear-gradient(#00A9E2, #7ccdf4);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

const MediumText = styled.h2`
	font-size: 3.5vw;
	margin: 1.5vh;
	font-family: "Archivo", sans-serif;
	font-weight: 400;
	color: #EBEBEB;
`;

const SmallText = styled.p`
	font-size: 2.25vw;
	margin: 0;
	color: #EBEBEB;
	font-family: "Archivo", sans-serif;
	font-weight: 100;
`;

const ImageContainer = styled.div`
	flex: 2;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const StyledImage = styled.img`
	max-width: 115%;
	max-height: 115%; 
	border-radius: 50%;
	object-fit: cover;
	transition: transform 1s ease, opacity 3s ease;
	box-shadow: 0 0 0 4px #EBEBEB, 0 0 0 10px #23233B;

	&:hover {
		transform: scale(1.015);
		opacity: 0.85;
	}
`;