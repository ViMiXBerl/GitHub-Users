import { User } from "../../assets";
import { InformationText } from "../InformationText/InformationText";
import { Main } from "../InitialState/InitialStateStyles";

const NotFound = () => {
	return (
		<Main>
			<User width={"110px"} />
			<InformationText>User not found</InformationText>
		</Main>
	);
};

export default NotFound;
