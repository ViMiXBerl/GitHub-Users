import { selectUser } from "../SearchForm/SearchFormSlice";
import { useSelector } from "react-redux";
import {
	ProfileWrapper,
	ProfileImg,
	ProfileName,
	ProfileLink,
	FollowerInfo,
	FollowerInfoWrapper,
	FollowerInfoText,
} from "./ProfileStyled";
import { FollowersIcon, FollowingIcon } from "../../assets/index";

const Profile = () => {
	const user = useSelector(selectUser);

	return (
		<ProfileWrapper>
			<ProfileImg src={user.avatar_url} alt='Avatar' />
			<ProfileName>{user.name}</ProfileName>
			<ProfileLink target='blank' href={user.html_url}>
				{user.login}
			</ProfileLink>

			<FollowerInfo>
				<FollowerInfoWrapper>
					<FollowersIcon />
					<FollowerInfoText>
						{user.followers > 1000
							? (user.followers / 1000).toFixed(1)
							: user.followers}
						{user.followers > 1000 ? "k" : ""} followers
					</FollowerInfoText>
				</FollowerInfoWrapper>
				<FollowerInfoWrapper>
					<FollowingIcon />
					<FollowerInfoText> {user.following} following </FollowerInfoText>
				</FollowerInfoWrapper>
			</FollowerInfo>
		</ProfileWrapper>
	);
};

export default Profile;
