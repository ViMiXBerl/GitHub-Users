import { LoaderStyled, LoaderWrapper } from "./LoaderStyled";
import styles from "./Loader.css";

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
