import styled from "styled-components";
import { colors } from "../../styles/colors";

export const RepositoryItemCard = styled.div`
	display: flex;
	width: 95%;
	margin: 0;
	flex-direction: column;
	padding: 24px 32px;
	gap: 16px;
	background-color: ${colors.input};
	border-radius: 6px;
	word-break: break-word;
`;

export const RepositoryLink = styled.a`
	margin: 0;
	font-family: "Inter, 500, Medium";
	font-size: 24px;
	line-height: 29px;
	color: ${colors.header};
	text-decoration: none;
	width: fit-content;
`;

export const RepositoryDescription = styled.p`
	margin: 0;
	font-family: "Inter, 400, Regular";
	font-size: 16px;
	line-height: 19px;
	color: ${colors.font};
`;
