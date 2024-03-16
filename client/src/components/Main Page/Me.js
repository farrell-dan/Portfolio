import { useState } from "react";
import styled from "styled-components";
import DanielImage1 from "../../assets/IMG_2243.JPG";
import DanielImage2 from "../../assets/IMG_9209.jpeg";


const Me = () => {
	const [isHovered, setIsHovered] = useState(false);
	const handleHover = () => {
		setIsHovered(!isHovered);
	};

	return (
		<Container id="home">
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
export default Me;

const Container = styled.section`

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
	background: linear-gradient(#00a9e2, #7ccdf4);
	background-clip: text;
	background: -webkit-linear-gradient(#00a9e2, #7ccdf4);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;
const MediumText = styled.h2`
	font-size: 3.5vw;
	margin: 1.5vh;
	font-family: "Archivo", sans-serif;
	font-weight: 400;
	color: #ebebeb;
`;
const SmallText = styled.p`
	font-size: 2.25vw;
	margin: 0;
	color: #ebebeb;
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
	margin-left: 1.5rem;
	object-fit: cover;
	transition: transform 1s ease, opacity 3s ease;
	box-shadow: 0 0 0 4px #ebebeb, 0 0 0 10px #23233b;
	&:hover {
		transform: scale(1.04);
		opacity: 0.85;
	}
`;
