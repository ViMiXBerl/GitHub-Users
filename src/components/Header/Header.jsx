import SearchForm from "../SearchForm/SearchForm";
import { HeaderStyled, HeaderWrapper, IconStyled } from "./HeaderStyled";

const Header = () => {
	return (
		<HeaderStyled>
			<HeaderWrapper>
				<IconStyled />
				<SearchForm />
			</HeaderWrapper>
		</HeaderStyled>
	);
};

export default Header;
