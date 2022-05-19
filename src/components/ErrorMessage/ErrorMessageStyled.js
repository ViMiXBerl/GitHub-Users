import styled from "styled-components";
import { colors } from "../../styles/colors";

export const ErrorMessageWrapper = styled.div`
	display: flex;
    background-color: ${colors.errorBackground};
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    width: 70%;
    border: 2px solid ${colors.errorBorder};

    @media (max-width: 550px) {
        width: 100%;
	}
}
`;
