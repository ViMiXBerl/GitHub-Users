import styled from "styled-components";
import { colors } from "../../styles/colors";

export const LoaderWrapper = styled.div`
	font-family: sans-serif;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	color: ${colors.loader};
	line-height: 1.5;
	font-size: 1em;
	background: #fff;
`;

export const LoaderStyled = styled.div`
	display: inline-block;
	font-size: 6em;
	height: 1em;
	line-height: 1;
	margin: 0.5em;
	animation: anim-rotate 2s infinite linear;
	color: ${colors.header};
	text-shadow: 0 0 0.25em rgba(255, 255, 255, 0.3);
`;
