import { LoaderStyled } from "./LoaderStyled";
import "./Loader.css";

const Loader = () => {
	return (
		<LoaderStyled className='spinner--steps icon-spinner' aria-hidden={true} />
	);
};

export default Loader;
