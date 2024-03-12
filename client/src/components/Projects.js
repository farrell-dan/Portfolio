import styled from "styled-components";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { github } from "react-icons-kit/icomoon/github";
import { display } from "react-icons-kit/icomoon/display";
// import Placeholder from "../assets/image-placeholder-500x500.jpg";
import mySportsCalImage from "../assets/Project_Screenshots/mySportsCal.png";
import NyanCatImage from "../assets/Project_Screenshots/Project Nyan Cat.png";
import SlingAirImgae from "../assets/Project_Screenshots/Project SlingAir.png";
import PortfolioImage from "../assets/Project_Screenshots/Portfolio.png";
import ECommerceImage from "../assets/Project_Screenshots/E-Commerce Project.png";

const projects = [
	{
		id: 1,
		title: "Project Nyan Cat",
		description:
			"The first project that I worked on during my bootcamp using html, css and javascript.",
		image: NyanCatImage,
		githubLink: "https://github.com/farrell-dan/concordia-project-js-nyan-cat",
	},
	{
		id: 2,
		title: "Project SlingAir",
		description:
			"My first team project, working only on the backend of the website.",
		image: SlingAirImgae,
		githubLink: "https://github.com/farrell-dan/concordia-project-slingair",
	},
	{
		id: 3,
		title: "Portfolio Project",
		description:
			"Using HTML, CSS, JavaScript, and React I had to create a clean and responsive portfolio to showcase my design and development skills.",
		image: PortfolioImage,
		githubLink: "https://github.com/farrell-dan/Portfolio",
	},
	{
		id: 4,
		title: "E-Commerce Project",
		description:
			"Another group project, the first time that we had to connect our frontend and backend code.",
		image: ECommerceImage,
		githubLink: "https://github.com/farrell-dan/project-GROUP-e-commerce",
	},
	{
		id: 5,
		title: "mySportsCal",
		description:
			"The final project of the bootcamp. Again linking frontend and backend code ",
		image: mySportsCalImage,
		githubLink: "https://github.com/farrell-dan/mysportscal---final-project",
	},
	// {
	// 	id: 6,
	// 	title: "Project 6",
	// 	description: "Description for Project 6",
	// 	image: Placeholder,
	// 	githubLink: "https://github.com/user/project5",
	// },
];

const Portfolio = () => {
	return (
		<CenteredContainer id="projects">
			<PortfolioContainer>
				<Header>My Projects</Header>
				<p>
					Click on the project to see more information on it and go to the
					product page.
				</p>
				<ProjectsContainer>
					{projects.map((project) => (
						<ProjectCard key={project.id}>
							<ProjectImageContainer>
								<Link to={`/projects/${project.title}`}>
									<ProjectImage src={project.image} alt={project.title} />
								</Link>
								<HoverContent>
									<h3>{project.title}</h3>
									<p>{project.description}</p>
									<GitHubIcon
										href={project.githubLink}
										target="_blank"
										rel="noopener noreferrer"
									>
										<Icon size={32} icon={github} />
									</GitHubIcon>

									<DisplayIcon target="_blank" rel="noopener noreferrer">
										<Icon size={32} icon={display} />
									</DisplayIcon>
								</HoverContent>
							</ProjectImageContainer>
						</ProjectCard>
					))}
				</ProjectsContainer>
			</PortfolioContainer>
		</CenteredContainer>
	);
};

export default Portfolio;

const CenteredContainer = styled.section`
	/* display: flex;
	justify-content: center;
	align-items: center;
	margin: 5vh auto;
	width: 80vw; */
`;

const PortfolioContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: space-evenly;
	align-items: center;
	background-color: #2c4268;
	min-width: 80vw;
	border-radius: 10px;
	font-family: "Archivo", sans-serif;
	font-weight: 100;
	color: #ebebeb;
`;

const Header = styled.h1`
	text-align: center;
	margin: 0;
	font-size: 5vh;
	height: 6vh;
	font-family: "Roboto", sans-serif;
	font-weight: 700;
	color: #ebebeb;
	padding: 20px;
`;

const ProjectsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	gap: 20px;
	max-width: 100%;
	padding: 20px;
`;

const ProjectCard = styled.div`
	width: 100%;
	overflow: hidden;
	position: relative;
	/* transition: transform 1s ease-in-out;

	&:hover {
		transform: scale(1.05); */
	}
`;

const ProjectImageContainer = styled.div`
	position: relative;
	height: 275px;
	width: 275px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: auto;
	z-index: 5;

	a {
		display: block;
		width: 100%;
		height: 100%;
	}
`;

const ProjectImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: fill;
	z-index: 10;
`;

const HoverContent = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(255, 255, 255, 0.8);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0;
	opacity: 0;
	color: #7ccdf4;
	transition: opacity 1s ease-in-out;
	${ProjectCard}:hover & {
		opacity: 1;
		background-color: #23233b;
		margin: 0;
	}
	p {
		text-align: center;
		font-size: xx-small;
		margin: 0;
	}
`;

const GitHubIcon = styled.a`
	margin-top: 10px;
	text-decoration: none;
	color: #7ccdf4;
	cursor: pointer;

	:hover {
		color: #ebebeb;
	}
`;

const DisplayIcon = styled.a`
	margin-top: 10px;
	text-decoration: none;
	color: #7ccdf4;
	cursor: pointer;

	:hover {
		color: #ebebeb;
	}
`;
