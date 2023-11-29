import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { github } from "react-icons-kit/icomoon/github";
import Placeholder from "../assets/image-placeholder-500x500.jpg";

const projects = [
	{
		id: 1,
		title: "Project 1",
		description: "Description for Project 1",
		image: Placeholder,
		githubLink: "https://github.com/user/project1",
	},
	{
		id: 2,
		title: "Project 2",
		description: "Description for Project 2",
		image: Placeholder,
		githubLink: "https://github.com/user/project2",
	},
	{
		id: 3,
		title: "Project 3",
		description: "Description for Project 3",
		image: Placeholder,
		githubLink: "https://github.com/user/project3",
	},
	{
		id: 4,
		title: "Project 4",
		description: "Description for Project 4",
		image: Placeholder,
		githubLink: "https://github.com/user/project4",
	},
	{
		id: 5,
		title: "Project 5",
		description: "Description for Project 5",
		image: Placeholder,
		githubLink: "https://github.com/user/project5",
	},
	{
		id: 6,
		title: "Project 6",
		description: "Description for Project 6",
		image: Placeholder,
		githubLink: "https://github.com/user/project6",
	},
];

const Portfolio = () => {
	return (
		<CenteredContainer>
			<PortfolioContainer>
				<Header>My Projects</Header>
				<UpdatesMessage>Updates coming soon</UpdatesMessage>
				<ProjectsContainer>
					{projects.map((project) => (
						<ProjectCard key={project.id}>
							<ProjectImageContainer>
								<ProjectImage src={project.image} alt={project.title} />
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

const CenteredContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 5vh auto;
	padding-bottom: 3vh;
	width: 80vw;
`;

const PortfolioContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: space-evenly;
	align-items: center;
	background-color: #2c4268;
	padding: 20px;
	width: 80vw;
	border-radius: 10px;
	font-family: "Archivo", sans-serif;
	font-weight: 100;
	color: #ebebeb;
`;

const Header = styled.h1`
	width: 100%;
	text-align: center;
	margin: 0;
	font-size: 5vh;
	height: 6vh;
	font-family: "Roboto", sans-serif;
	font-weight: 700;
	color: #ebebeb;
`;

const UpdatesMessage = styled.p`
	display: flex;
	flex-direction: column;
	font-size: 1rem;
	color: #ebebeb;
	margin-top: 10px;
`;

const ProjectsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	gap: 20px;
	max-width: 100%;
	margin: 0 auto;
`;

const ProjectCard = styled.div`
	width: 100%;
	overflow: hidden;
	position: relative;
	transition: transform 1s ease-in-out;

	&:hover {
		transform: scale(1.05);
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
`;

const ProjectImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
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
