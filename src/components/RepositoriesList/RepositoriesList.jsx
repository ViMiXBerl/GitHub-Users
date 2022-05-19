import {
	selectRepos,
	selectLoading,
	selectError,
} from "./RepositoriesListSlice";
import { useSelector } from "react-redux";
import { selectUser } from "../SearchForm/SearchFormSlice";
import {
	RepositoriesListWrapper,
	RepositoriesListHeader,
	RepositoryItemWrapper,
	RepositoryItemsContainer,
} from "./RepositoriesListStyled";
import EmptyRepositoryList from "../EmptyRepositoryList/EmptyRepositoryList";
import RepositoryItem from "../RepositoryItem/RepositoryItem";
import Pagination from "../Pagination/Pagination";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { LoaderRepositoryWrapper } from "../Loader/LoaderStyled";

const RepositoriesList = () => {
	const repos = useSelector(selectRepos);
	const user = useSelector(selectUser);
	const loading = useSelector(selectLoading);
	const error = useSelector(selectError);

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
						<LoaderRepositoryWrapper>
							<Loader />
						</LoaderRepositoryWrapper>
					) : error ? (
						<ErrorMessage />
					) : (
						<RepositoryItemsContainer>
							{repos.map((repo) => (
								<RepositoryItemWrapper key={repo.id}>
									<RepositoryItem
										repository={repo.name}
										description={repo.description}
										href={repo.html_url}
									/>
								</RepositoryItemWrapper>
							))}
						</RepositoryItemsContainer>
					)}
					<Pagination itemsPerPage={4} />
				</>
			)}
		</RepositoriesListWrapper>
	);
};

export default RepositoriesList;
