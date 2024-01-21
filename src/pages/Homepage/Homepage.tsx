import React, {useEffect} from "react";
import videoService from "../../services/videoService";

type Props = {};

const Homepage = (props: Props) => {
	useEffect(() => {
		videoService.getAll().then();
		videoService.delete(1).then();
	}, []);

	return <div>Homepage</div>;
};

export default Homepage;
// Formik
