import Profile from "../Profile/Profile";
import { ProfileContainerWrapper } from "./ProfileContainerStyled";

const ProfileContainer = () => {
	return (
		<ProfileContainerWrapper>
			<Profile />
			<div>"List of repositories"</div>
		</ProfileContainerWrapper>
	);
};

export default ProfileContainer;
