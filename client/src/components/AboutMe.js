import MyCV from "../assets/Daniel Farrell CV.png";
import DownloadButton from "./CVDownload";
import styled from "styled-components";

const AboutMe = () => {
	return (
		<Container id="about">
			<ContentContainer>
				<h1>About Me</h1>
				<Column>
					<h2>Biography</h2>
					<p>
						I am a dedicated professional currently transitioning to a career in
						Full Stack Web Development. With a solid background in the health
						and wellness field, I have honed my adaptability skills in diverse
						environments. Coming from a life of team sports I excel while
						working in a collaborative setting. After successfully completing my
						diploma in Web Development, I am now well-equipped and enthusiastic
						to apply my skills and embark on a fulfilling journey in this
						dynamic field. Eager to leverage my expertise, I am committed to
						creating innovative and user-centric solutions in the ever-evolving
						digital landscape.
					</p>
					<p>
						I am a certified athletic therapist who is very passionate about
						health and wellness. I am a quick learner who adapts easily in new
						environments. Having played team sports my entire life, I thrive
						while working as part of a team. I have enjoyed my experiences
						working in clinics, gyms and on the field as an athletic therapist
						and I am now looking for a new challenge.
					</p>
					<p>
						I believe I am the best candidate for the web developer position due
						to a combination of my strong work ethic, passion for the field, and
						unique skill set acquired through my experience as an athletic
						therapist. My background in athletic therapy has honed my teamwork,
						multitasking, and stress management abilities, making me adept at
						collaborating effectively in dynamic environments. These skills are
						transferable and essential in the fast-paced world of web
						development.  
					</p>
					<p>
						My commitment to continuous learning aligns with the ever-evolving
						nature of technology. As a quick learner, I am always eager to
						embrace new challenges and stay updated on the latest trends in web
						development. This enthusiasm for growth, coupled with my ability to
						thrive in high-stress situations, positions me as a candidate
						capable of adapting to the fast-paced and dynamic nature of the tech
						industry.  
					</p>
					<p>
						In summary, my work ethic, passion, teamwork skills, ability to
						handle stress, and dedication to ongoing learning make me the ideal
						candidate to contribute effectively to the collaborative and
						innovative environment at your company.
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

const Container = styled.section`
	/* display: flex;
	align-items: center;
	justify-content: center;
	width: 80vw;
	margin: 5vh auto; */
`;

const ContentContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: center;
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
		width: 100%;
		text-align: center;
	}
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
