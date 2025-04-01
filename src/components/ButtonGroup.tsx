import type React from "react";
import Button from "./apiButton";

const ButtonGroup: React.FC = () => {
	return (
		<div className="button-group">
			<Button buttonText="Daystart" />
			<Button buttonText="Lunchstart" />
			<Button buttonText="Lunchend" />
			<Button buttonText="Dayend" />
		</div>
	);
};

export default ButtonGroup;
