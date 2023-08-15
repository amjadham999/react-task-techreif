import Title from "./Title";
import Parag from "./Parag";

const Intro = ({ data }) => {
	return (
		<>
			<section className={`container-fluid text-center d-flex flex-column justify-content-center align-content-center p-0 mb-5 ${data.classes ?? ''}`}>
				{!!data.title && <Title title={data.title} />}
				{!!data.parag && <Parag parag={data.parag} />}
			</section>
		</>
	);
};

export default Intro;
