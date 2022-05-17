import styled from "styled-components";
import ReactPaginate from "react-paginate";
import { colors } from "../../styles/colors";

export const PaginationWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding: 0 4rem 0 0;
	font-family: "Inter, 400, Regular";
	font-size: 14px;
	line-height: 21px;
	color: ${colors.informationFont};
`;

export const StyledPagination = styled(ReactPaginate)`
	width: 20%;
	display: flex;
	align-items: center;
	list-style-type: none;
	padding: 0;
	margin: 2rem;
	cursor: pointer;
`;
