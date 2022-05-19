import styled from "styled-components";
import { colors } from "../../styles/colors";
import "../../assets/fonts/index.css";

export const Form = styled.form`
	width: 40%;
	margin: 0;

	@media (max-width: 600px) {
		width: 100%;
	}
`;

export const Input = styled.input`
	background-color: ${colors.input};
	width: 90%;
	border: none;
	outline: none;
	font-family: "Inter, 400, Regular";
	font-size: 14px;
	line-height: 16.94px;
	color: ${colors.font};
`;

export const FormWrapper = styled.div`
	width: 100%;
	margin: 0;
	padding: 0.7rem;
	background-color: ${colors.input};
	border-radius: 6px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;
