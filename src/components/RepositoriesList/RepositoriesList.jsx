import {
	selectRepos,
	selectLoading,
	selectError,
} from "./RepositoriesListSlice";
import { useSelector } from "react-redux";
import { selectUser } from "../SearchForm/SearchFormSlice";
import { RepositoriesListWrapper } from "./RepositoriesListStyled";

const RepositoriesList = () => {
	const repos = useSelector(selectRepos);
	const user = useSelector(selectUser);

	return (
		<RepositoriesListWrapper>
			{user.public_repos === 0 ? (
				"Repository list is empty"
			) : (
				<p>Repositories ({user.public_repos})</p>
			)}
		</RepositoriesListWrapper>
	);
};

export default RepositoriesList;
