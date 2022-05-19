import styled from "styled-components";

export const EmptyRepositoryListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	margin: 0;

	@media (max-width: 1330px) {
		height: 50vh;
	}
`;
