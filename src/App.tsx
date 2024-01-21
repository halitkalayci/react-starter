import {OverlayLoader} from "./components/OverlayLoader/OverlayLoader";
import RouteDefinitions from "./components/Routes/RouteDefinitions";

function App() {
	return (
		<>
			{/* Navbar */}
			<OverlayLoader />
			<RouteDefinitions />
			{/* Footer */}
		</>
	);
}

export default App;
