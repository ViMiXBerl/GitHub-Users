import { Form, Input, FormWrapper } from "./SearchFormStyled";
import { Loupe } from "../../assets";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getAsyncUser, selectUser, selectLoading } from "./SearchFormSlice";
import { useSelector } from "react-redux";

const SearchForm = () => {
	const [userName, setUserName] = useState("");

	const dispatch = useDispatch();
	const userNameValue = userName;
	// const user = useSelector(selectUser);
	// const loading = useSelector(selectLoading);

	return (
		<Form
			onSubmit={(event) => {
				event.preventDefault();
				dispatch(getAsyncUser(userNameValue));
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
