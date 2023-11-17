import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { linkedin } from "react-icons-kit/icomoon/linkedin";
import { github } from "react-icons-kit/icomoon/github";



const YOUR_SERVICE_ID = process.env.REACT_APP_YOUR_SERVICE_ID
const YOUR_TEMPLATE_ID = process.env.REACT_APP_YOUR_TEMPLATE_ID;
const YOUR_PUBLIC_KEY = process.env.REACT_APP_YOUR_PUBLIC_KEY;


const ContactMe = () => {
	const form = useRef();
	const [isMessageSent, setMessageSent] = useState(false);
	const [formSubmitted, setFormSubmitted] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();

		if (!formSubmitted) {

			console.log("Public Key:", YOUR_PUBLIC_KEY);

			emailjs
				.sendForm(
					YOUR_SERVICE_ID,
					YOUR_TEMPLATE_ID,
					form.current,
					YOUR_PUBLIC_KEY
				)
				.then(
					(result) => {
						console.log(result.text);
						console.log("message sent");
						setMessageSent(true);
						setFormSubmitted(true);
						form.current.reset();
					},
					(error) => {
						console.log(error.text);
					}
				);
		}
	};

	return (
		<StyledContactContainerWrapper id="text">
			<StyledContactContainer>
				<StyledContactForm>
					<h1> Contact Me</h1>
					{isMessageSent && (
						<div className="success-message">Message sent successfully!</div>
					)}
					<form ref={form} onSubmit={sendEmail}>
						<label>Name</label>
						<input
							type="text"
							name="user_name"
							placeholder="John Doe"
							required
						/>
						<label>Phone Number</label>
						<input
							type="tel"
							name="user_phoneNumber"
							placeholder="123-456-7890"
							pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
							required
						/>
						<label>Email</label>
						<input
							type="email"
							placeholder="example@email.com"
							name="user_email"
							required
						/>
						<label>Subject</label>
						<input
							type="text"
							name="subject"
							placeholder="email subject"
							required
						/>
						<label>Message</label>
						<textarea
							name="message"
							placeholder="Your message here..."
							minLength={30}
							required
						/>
						<input type="submit" value="Send" disabled={formSubmitted} />
					</form>
				</StyledContactForm>
				<StyledIconsContainer>
					<a
						href="https://www.linkedin.com/in/d-farrell/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Icon icon={linkedin} size={80} />
						<span>My LinkedIn</span>
					</a>
					<a
						href="https://github.com/farrell-dan"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Icon icon={github} size={80} />
						<span>My GitHub</span>
					</a>
				</StyledIconsContainer>
			</StyledContactContainer>
		</StyledContactContainerWrapper>
	);
};

export default ContactMe;

const StyledContactContainerWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 80vh;
	margin-top: 5vh;
`;

const StyledContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80vw;
	height: 80vh;
    background-color: #2c4268;
    border-radius: 10px;
	overflow: auto;
	color: #ebebeb;
	font-family: "Roboto", sans-serif;
	font-weight: 700;
`;

const StyledContactForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70vw;

	h1{
		font-size: 5vw;
	}

    .success-message {
        margin-top: 1rem;
        color: #ebebeb;
        font-weight: bold;
		background-color: #00a9e2;
    }

    form {
		font-family: "Archivo", sans-serif;
		font-weight: 100;
        width: 100%;
        display: flex;
        flex-direction: column;
        font-size: 2vw; 
		margin: 0px;

        input,
        textarea {
            width: 100%;
            height: 1.5vh; 
            padding: 1vw;
			border: solid 1px #00a9e2;
			
            
        }

        textarea {
            height: 5vh; 
        }

        label {
            margin-top: 1vh;
        }

        input[type="submit"] {
			margin-left: auto;
			margin-right: auto;
            margin-top: 1vh;
			height: 3vh;
			min-height: 30px;
			width: 50%;
            cursor: pointer;
            background:  #00a9e2;
            color: #ebebeb;
            border: none;

			&:hover {
			background: #b2b0b0;
			transform: scale(1.05);
			transition: transform 0.75s ease;
		}
        }
    }
`;

const StyledIconsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    a {
        text-decoration: none;
        color: #b2b0b0;
        transition: color 0.3s ease;
        margin-top: 2vh;
        margin-bottom: 2vh;
        margin-right: 5vw;
        margin-left: 5vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 1.5vw;

        &:hover {
            color: #00a9e2;
            transform: scale(1.15);
            transition: transform 1s ease;

            span {
                opacity: 1;
                transition: opacity 0.3s ease;
            }
        }

        span {
            margin-top: 0.5vh;
            opacity: 0;
        }
    }
`;