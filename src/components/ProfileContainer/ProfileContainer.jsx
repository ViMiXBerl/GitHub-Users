import Profile from "../Profile/Profile";
import { ProfileContainerWrapper } from "./ProfileContainerStyled";
import RepositoriesList from "../RepositoriesList/RepositoriesList";

const ProfileContainer = () => {
	return (
		<ProfileContainerWrapper>
			<Profile />
			<RepositoriesList />
		</ProfileContainerWrapper>
	);
};

export default ProfileContainer;
