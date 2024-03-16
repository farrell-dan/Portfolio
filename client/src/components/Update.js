import styled from "styled-components";

const Update = () => {
	return (
		<>
			<CenteredText>Updates in progress... New site coming soon!!</CenteredText>
		</>
	);
};
export default Update;

const CenteredText = styled.h1`
	margin-top: 10rem;
	padding: 10rem;
	font-size: 5rem;
	display: flex;
	justify-content: center;
	text-align: center;
	color: white;
	font-weight: bolder;
	background-color: black;
	z-index: 100;
`;
