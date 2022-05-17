import { selectRepos } from "./RepositoriesListSlice";
import { useSelector } from "react-redux";
import { selectUser } from "../SearchForm/SearchFormSlice";
import {
	RepositoriesListWrapper,
	RepositoriesListHeader,
	RepositoryItemWrapper,
} from "./RepositoriesListStyled";
import EmptyRepositoryList from "../EmptyRepositoryList/EmptyRepositoryList";
import RepositoryItem from "../RepositoryItem/RepositoryItem";
import Pagination from "../Pagination/Pagination";
import { selectLoading } from "./RepositoriesListSlice";
import Loader from "../Loader/Loader";

const RepositoriesList = () => {
	const repos = useSelector(selectRepos);
	const user = useSelector(selectUser);
	const loading = useSelector(selectLoading);

	return (
		<RepositoriesListWrapper>
			{user.public_repos === 0 ? (
				<EmptyRepositoryList />
			) : (
				<>
					<RepositoriesListHeader>
						Repositories ({user.public_repos})
					</RepositoriesListHeader>
					{loading ? (
						<Loader />
					) : (
						repos.map((repo) => (
							<RepositoryItemWrapper key={repo.id}>
								<RepositoryItem
									repository={repo.name}
									description={repo.description}
									href={repo.html_url}
								/>
							</RepositoryItemWrapper>
						))
					)}
					<Pagination itemsPerPage={4} />
				</>
			)}
		</RepositoriesListWrapper>
	);
};

export default RepositoriesList;
