import React, {useEffect} from "react";
import videoService from "../../services/videoService";
import authService from "../../services/authService";

type Props = {};

const About = (props: Props) => {
	useEffect(() => {
		authService
			.register({
				email: "string",
				password: "str",
				firstName: "deneme",
				lastName: "deneme",
			})
			.then(response => console.log(response));
	});

	return <div>About</div>;
};

export default About;
