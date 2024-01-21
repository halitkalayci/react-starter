import "./overlayloader.css";
import {useSelector} from "react-redux";

type Props = {};

export const OverlayLoader = (props: Props) => {
	const loadingState = useSelector((state: any) => state.loading);

	return (
		<>
			{loadingState.requestCount <= 0 && (
				<div className="overlay">
					<div className="overlay__inner">
						<div className="overlay__content">
							<img
								className="spinner"
								src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTebeto-logo-yatay-beyaz.8c2d6927.png&amp;w=256&amp;q=75"
							/>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
