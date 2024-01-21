import React, {useEffect} from "react";
import videoService from "../../services/videoService";

type Props = {};

const About = (props: Props) => {
	useEffect(() => {
		videoService.add({}).then();
		videoService.delete(1).then();
		videoService.getAll().then();
	});

	return <div>About</div>;
};

export default About;
