import { Main } from "./InitialStateStyled";
import { InitialLoupe } from "../../assets";
import { InformationText } from "../InformationText/InformationText";

const InitialState = () => {
	return (
		<Main>
			<InitialLoupe />
			<InformationText>Start with searching a GitHub user</InformationText>
		</Main>
	);
};

export default InitialState;
