import { InformationText } from "../InformationText/InformationText";
import { EmptyIcon } from "../../assets/index";
import { EmptyRepositoryListWrapper } from "./EmptyRepositoryListStyled";

const EmptyRepositoryList = () => {
	return (
		<EmptyRepositoryListWrapper>
			<EmptyIcon />
			<InformationText>Repository list is empty</InformationText>
		</EmptyRepositoryListWrapper>
	);
};

export default EmptyRepositoryList;
