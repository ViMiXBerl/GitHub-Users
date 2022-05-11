import styled from "styled-components";
import { colors } from "../../styles/colors";

export const ProfileWrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	width: 30%;
	margin: 7rem 0 0 0;
`;

export const ProfileImg = styled.img`
	border-radius: 50%;
	width: 55%;
`;

export const ProfileName = styled.p`
	width: 55%;
	padding: 1rem 0 0 0;
	font-family: "Inter, 600, Semi Bold";
	font-size: 26px;
	line-height: 33.8px;
	color: ${colors.font};
`;

export const ProfileLink = styled.a`
	font-family: "Inter, 400, Regular";
	font-size: 18px;
	line-height: 21.78px;
	width: 55%;
	padding: 0.7rem 0 0 0;
	color: ${colors.header};
	text-decoration: none;
`;

export const FollowerInfo = styled.div`
	display: flex;
	width: 55%;
`;

export const FollowerInfoWrapper = styled.div`
	margin: 2rem 1rem 0 0;
	display: flex;
	align-items: center;
	white-space: nowrap;
`;

export const FollowerInfoText = styled.span`
	font-family: "Inter, 400, Regular";
	font-size: 16px;
	line-height: 24px;
	margin: 0 0 0 0.5rem;
`;
