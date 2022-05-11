import { LoaderStyled, LoaderWrapper } from "./LoaderStyled";
import "./Loader.css";

const Loader = () => {
	return (
		<LoaderWrapper>
			<LoaderStyled
				className='spinner--steps icon-spinner'
				aria-hidden={true}
			/>
		</LoaderWrapper>
	);
};

export default Loader;
