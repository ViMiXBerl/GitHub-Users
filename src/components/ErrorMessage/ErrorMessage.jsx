import { ErrorMessageWrapper } from "./ErrorMessageStyled";
import { InformationText } from "../InformationText/InformationText";

const ErrorMessage = () => {
	return (
		<ErrorMessageWrapper>
			<InformationText> Something goes wrong</InformationText>
		</ErrorMessageWrapper>
	);
};

export default ErrorMessage;
