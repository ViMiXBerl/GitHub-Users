import Header from "../../components/Header/Header";
import InitialState from "../../components/InitialState/InitialState";
import Loader from "../../components/Loader/Loader";
import {
	selectUser,
	selectLoading,
	selectError,
} from "../../components/SearchForm/SearchFormSlice";
import { useSelector } from "react-redux";
import NotFound from "../../components/NotFound/NotFound";
import ProfileContainer from "../../components/ProfileContainer/ProfileContainer";

const MainScreen = () => {
	const user = useSelector(selectUser);
	const loading = useSelector(selectLoading);
	const error = useSelector(selectError);

	return (
		<>
			<Header />
			{loading ? (
				<Loader />
			) : error ? (
				<NotFound />
			) : user.length !== 0 ? (
				<ProfileContainer />
			) : (
				<InitialState />
			)}
		</>
	);
};

export default MainScreen;
