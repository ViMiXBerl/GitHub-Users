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

export const StyledPagination = styled(ReactPaginate).attrs({
	breakClassName: "pagination-break",
	breakLinkClassName: "pagination-break-link",
	pageClassName: "pagination-page",
	previousClassName: "pagination-previous",
	nextClassName: "pagination-next",
	disabledClassName: "pagination-disabled",
})`
	width: 20%;
	display: flex;
	align-items: center;
	list-style-type: none;
	padding: 0;
	margin: 2rem;
	cursor: pointer;

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
