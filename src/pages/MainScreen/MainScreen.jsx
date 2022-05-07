import Header from "../../components/Header/Header";
import InitialState from "../../components/InitialState/InitialState";
import Loader from "../../components/Loader/Loader";
import {
	selectUser,
	selectLoading,
} from "../../components/SearchForm/SearchFormSlice";
import { useSelector } from "react-redux";

const MainScreen = () => {
	const user = useSelector(selectUser);
	const loading = useSelector(selectLoading);

	return (
		<>
			<Header />
			{loading ? <Loader /> : <InitialState />}
		</>
	);
};

export default MainScreen;
