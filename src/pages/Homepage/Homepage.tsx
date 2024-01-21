import React, {useEffect} from "react";
import videoService from "../../services/videoService";
import authService from "../../services/authService";

type Props = {};

const Homepage = (props: Props) => {
	useEffect(() => {
		authService
			.register({
				email: "string@string.com",
				password: "string123",
				firstName: "deneme",
				lastName: "deneme",
			})
			.then(response => console.log(response));
	}, []);

	return <div>Homepage</div>;
};

export default Homepage;
// Formik
