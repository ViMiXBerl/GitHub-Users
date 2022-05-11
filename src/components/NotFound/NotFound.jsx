import { UserIcon } from "../../assets";
import { InformationText } from "../InformationText/InformationText";
import { Main } from "../InitialState/InitialStateStyled";

const NotFound = () => {
	return (
		<Main>
			<UserIcon />
			<InformationText>User not found</InformationText>
		</Main>
	);
};

export default NotFound;
