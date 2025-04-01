import type React from "react";
import Button from "./apiButton";

const ButtonGroup: React.FC = () => {
	return (
		<div
			className="button-group"
			style={{ display: "flex", flexDirection: "column", gap: "10px" }}
		>
			<Button buttonText="Daystart" />
			<Button buttonText="Lunchstart" />
			<Button buttonText="Lunchend" />
			<Button buttonText="Dayend" />
		</div>
	);
};

export default ButtonGroup;
