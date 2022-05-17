import styled from "styled-components";
import { colors } from "../../styles/colors";

export const RepositoriesListWrapper = styled.div`
	width: 70%;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	padding: 6.5rem 0 0 0;
	overflow-y: auto;
`;

export const RepositoriesListHeader = styled.p`
	margin: 0 0 1rem 0;
	font-family: "Inter, 600, Semi Bold";
	font-size: 32px;
	line-height: 41.6px;
	color: ${colors.font};
`;

export const RepositoryItemWrapper = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	margin: 1rem 0 0 0;
`;
