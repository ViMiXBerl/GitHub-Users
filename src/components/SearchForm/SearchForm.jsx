import { Form, Input, FormWrapper } from "./SearchFormStyled";
import { Loupe } from "../../assets";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getAsyncUser } from "./SearchFormSlice";
import { getAsyncRepos } from "../RepositoriesList/RepositoriesListSlice";

const SearchForm = () => {
	const dispatch = useDispatch();

	const [userName, setUserName] = useState("");

	const userNameValue = userName;

	return (
		<Form
			onSubmit={(event) => {
				event.preventDefault();

				dispatch(getAsyncUser(userNameValue));
				dispatch(getAsyncRepos({ userNameValue }));
			}}
		>
			<FormWrapper>
				<Loupe />
				<Input
					type='text'
					placeholder='Enter GitHub username'
					value={userName}
					onChange={(event) => setUserName(event.target.value)}
				/>
			</FormWrapper>
		</Form>
	);
};

export default SearchForm;
