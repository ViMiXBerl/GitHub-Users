import {
	StyledPagination,
	PaginationWrapper,
	PaginationText,
} from "./PaginationStyled";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../SearchForm/SearchFormSlice";
import { getAsyncRepos } from "../RepositoriesList/RepositoriesListSlice";
// import "./Pagination.css";
import { useState } from "react";

const Pagination = ({ itemsPerPage }) => {
	const dispatch = useDispatch();
	const [pageOffset, setPageOffset] = useState(0);

	const user = useSelector(selectUser);
	const pageCount = Math.ceil(user.public_repos / itemsPerPage);
	const endOffset = pageOffset + itemsPerPage;
	const difference =
		endOffset > user.public_repos ? endOffset - user.public_repos : 0;

	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % user.public_repos;

		setPageOffset(newOffset);

		const userNameValue = user.login;
		const per_page = itemsPerPage;
		const page = event.selected + 1;

		dispatch(getAsyncRepos({ userNameValue, per_page, page }));
	};

	return (
		<PaginationWrapper>
			<PaginationText>{`${pageOffset + 1}-${endOffset - difference} of ${
				user.public_repos
			} items`}</PaginationText>
			<StyledPagination
				pageCount={pageCount}
				pageRangeDisplayed={3}
				marginPagesDisplayed={1}
				previousLabel='<'
				nextLabel='>'
				breakLabel='...'
				onPageChange={handlePageClick}
			/>
		</PaginationWrapper>
	);
};

export default Pagination;
