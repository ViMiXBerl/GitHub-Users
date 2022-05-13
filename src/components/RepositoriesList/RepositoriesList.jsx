import {
	selectRepos,
	selectLoading,
	selectError,
} from "./RepositoriesListSlice";
import { useSelector } from "react-redux";
import { selectUser } from "../SearchForm/SearchFormSlice";
import { RepositoriesListWrapper } from "./RepositoriesListStyled";
import EmptyRepositoryList from "../EmptyRepositoryList/EmptyRepositoryList";

const RepositoriesList = () => {
	const repos = useSelector(selectRepos);
	const user = useSelector(selectUser);

	return (
		<RepositoriesListWrapper>
			{user.public_repos === 0 ? (
				<EmptyRepositoryList />
			) : (
				<p>Repositories ({user.public_repos})</p>
			)}
		</RepositoriesListWrapper>
	);
};

export default RepositoriesList;
