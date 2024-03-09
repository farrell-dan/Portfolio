import MyCV from "../assets/Daniel Farrell CV.png";
import DownloadButton from "./CVDownload";
import styled from "styled-components";

const AboutMe = () => {
	return (
		<Container id="about-me">
			<h1>About Me</h1>
			<ContentContainer>
				<Column>
					<h2>Biography</h2>
					<p>
						Daniel, pursuing a web development diploma, excels in HTML, CSS, and
						JavaScript. His journey extends to Advanced Frontend with React,
						demonstrating expertise in crafting responsive interfaces.
					</p>
					<p>
						Venturing into NodeJS, he deploys robust servers, embraces RESTful
						API principles, and engages in collaborative projects. His
						proficiency in MongoDB allows seamless frontend-backend connection
						for MERN applications.
					</p>
					<p>
						Daniel's Athletic Therapy background, a Concordia graduate, brings
						versatility. Work with Montreal Impact Soccer Schools and Gym Klub
						20 showcases his commitment to continuous improvement and expertise
						in areas like Speed, Agility, Quickness Training, and Balance
						Training.
					</p>
					<p>
						Beyond sports, Daniel's active approach extends to hockey, soccer,
						rugby, cycling, hiking, snowboarding, and soccer refereeing. A team
						player, problem solver, hard worker, and fast learner, Daniel brings
						a dynamic approach to every endeavor.
					</p>
				</Column>
				<RightColumn>
					<h2>My CV</h2>
					<img src={MyCV} alt="My CV" />
					<DownloadButton />
				</RightColumn>
			</ContentContainer>
		</Container>
	);
};

export default AboutMe;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	width: 80vw;
	min-width: 450px;
	min-height: 610px;
	margin: 5vh auto;
	background-color: #2c4268;
	border-radius: 10px;
	font-family: "Roboto", sans-serif;
	font-weight: 700;
	color: #ebebeb;

	h1 {
		font-size: 3.5rem;
		margin: 0;
	}
`;

const ContentContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: start;
`;

const Column = styled.div`
	width: 45%;
	text-align: center;
	margin: 0 10px;
	padding-bottom: 30px;

	h2 {
		font-family: "Roboto", sans-serif;
		font-weight: 400;
		font-size: 2.25rem;
		color: #ebebeb;
	}

	p {
		display: flex;
		text-align: justify;
		font-family: "Archivo", sans-serif;
		font-weight: 100;
		font-size: 1.25rem;
		color: #ebebeb;
	}

	@media (max-width: 900px) {
    width: 100%; 
	border-bottom: black solid 3px;
  }
`;

const RightColumn = styled(Column)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	
	margin: 0 10px;
	h2 {
		font-family: "Roboto", sans-serif;
		font-weight: 400;
		color: #ebebeb;
	}

	img {
		max-height: 50vh;
		box-shadow: 0 0 0 5px white, 0 0 0 8px black;
		border-radius: 30%;
	}

	button {
		display: flex;
		align-items: center;
		justify-content: center;
		display: block;
		margin: 20px auto;
		font-family: "Roboto", sans-serif;
		font-weight: 400;
		color: #ebebeb;
		background-color: #00a9e2;
		border: none;
		cursor: pointer;
		height: 4vh;
		min-width: 10vw;
		transition: background-color 1s ease, transform 1s ease;

		&:hover {
			background-color: #b2b0b0;
			transform: scale(1.25);
		}
	}
`;
