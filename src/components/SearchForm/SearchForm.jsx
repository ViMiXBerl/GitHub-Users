import { Form, Input, FormWrapper } from "./SearchFormStyled";
import { Loupe } from "../../assets";
import { useState, useEffect } from "react";
import axios from "axios";

const SearchForm = () => {
	const [data, setData] = useState([]);
	const [userName, setUserName] = useState("");
	const [url, setUrl] = useState();

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get(url);

			setData(data);
		};

		fetchData();
	}, [url]);

	return (
		<Form
			onSubmit={(event) => {
				setUrl(`https://api.github.com/users/${userName}`);
				event.preventDefault();
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
