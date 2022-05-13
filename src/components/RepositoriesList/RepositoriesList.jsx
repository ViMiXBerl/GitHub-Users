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

const RepositoriesList = () => {
	const repos = useSelector(selectRepos);
	const user = useSelector(selectUser);

	return (
		<RepositoriesListWrapper>
			{user.public_repos === 0 ? (
				<EmptyRepositoryList />
			) : (
				<>
					<RepositoriesListHeader>
						Repositories ({user.public_repos})
					</RepositoriesListHeader>
					{repos.map((repo) => (
						<RepositoryItemWrapper key={repo.id}>
							<RepositoryItem
								repository={repo.name}
								description={repo.description}
								href={repo.html_url}
							/>
						</RepositoryItemWrapper>
					))}
				</>
			)}
		</RepositoriesListWrapper>
	);
};

export default RepositoriesList;
