import styled from "styled-components";
import { colors } from "../../styles/colors";

export const ProfileContainerWrapper = styled.main`
	display: flex;
	width: 100%;
	height: 100vh;
	background-color: ${colors.background};

	@media (max-width: 1330px) {
		flex-direction: column;
		overflow-y: auto;
	}
`;
