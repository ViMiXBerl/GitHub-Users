import styled from "styled-components";
import ReactPaginate from "react-paginate";
import { colors } from "../../styles/colors";

export const PaginationWrapper = styled.div`
	width: 95%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	font-family: "Inter, 400, Regular";
	font-size: 14px;
	line-height: 21px;
	color: ${colors.informationFont};

	@media (max-width: 800px) {
		justify-content: center;
		flex-wrap: wrap;
	}

	@media (max-width: 550px) {
		flex-direction: column;
	}
`;

export const StyledPagination = styled(ReactPaginate).attrs({
	breakClassName: "pagination-break",
	breakLinkClassName: "pagination-break-link",
	pageClassName: "pagination-page",
	previousClassName: "pagination-previous",
	nextClassName: "pagination-next",
	disabledClassName: "pagination-disabled",
})`
	width: fit-content;
	display: flex;
	align-items: center;
	list-style-type: none;
	padding: 0;
	margin: 2rem;
	cursor: pointer;

	@media (max-width: 550px) {
		margin: 1rem;
	}

	.pagination-break {
		margin: 0 0.5rem;
	}

	.pagination-break-link {
		font-family: "WorkSans, 400, Regular";
		font-size: 16px;
		color: #808080;
	}

	.pagination-page {
		font-family: "Inter, 400, Regular";
		font-size: 14px;
		line-height: 21px;
		color: #808080;
		margin: 0 0.5rem;
	}

	.pagination-previous {
		color: #0064eb;
	}

	.pagination-next {
		color: #0064eb;
	}

	.pagination-disabled {
		color: #808080;
		cursor: default;
	}

	.selected {
		font-family: "Inter, 400, Regular";
		font-size: 14px;
		line-height: 21px;
		padding: 2px 6px;
		gap: 10px;
		color: #ffff;
		background-color: #0064eb;
		border-radius: 3px;
	}
`;

export const PaginationText = styled.p`
	margin: 0;

	@media (max-width: 550px) {
		margin: 1rem;
	}
`;
