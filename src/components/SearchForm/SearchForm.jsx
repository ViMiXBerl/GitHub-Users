import { Form, Input, FormWrapper } from "./SearchFormStyled";
import { Loupe } from "../../assets";

const SearchForm = () => {
	return (
		<Form>
			<FormWrapper>
				<Loupe />
				<Input type='text' placeholder='Enter GitHub username' />
			</FormWrapper>
		</Form>
	);
};

export default SearchForm;
