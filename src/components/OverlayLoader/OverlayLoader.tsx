import "./overlayloader.css";
import {useSelector} from "react-redux";

type Props = {};

export const OverlayLoader = (props: Props) => {
	const loadingState = useSelector((state: any) => state.loading);

	return (
		<>
			{loadingState.requestCount > 0 && (
				<div className="overlay">
					<div className="overlay__inner">
						<div className="overlay__content">
							<img className="spinner" src="/assets/images/tobeto.png" />
						</div>
					</div>
				</div>
			)}
		</>
	);
};
