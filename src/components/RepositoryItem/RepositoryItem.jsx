import {
	RepositoryItemCard,
	RepositoryLink,
	RepositoryDescription,
} from "./RepositoryItemStyled";

const RepositoryItem = ({ repository, description, href }) => {
	return (
		<RepositoryItemCard>
			<RepositoryLink target='blank' href={href}>
				{repository}
			</RepositoryLink>
			<RepositoryDescription>{description}</RepositoryDescription>
		</RepositoryItemCard>
	);
};

export default RepositoryItem;
