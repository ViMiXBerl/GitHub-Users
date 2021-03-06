import styled from "styled-components";
import { colors } from "../../styles/colors";
import { Icon } from "../../assets";

export const HeaderStyled = styled.header`
	width: 100%;
	background-color: ${colors.header};
	position: absolute;
`;

export const HeaderWrapper = styled.div`
	width: 90%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

export const IconStyled = styled(Icon)`
	margin: 1rem;
`;
