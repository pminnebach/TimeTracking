import type React from "react";

interface HeaderProps {
	buttonText: string;
}

const Button: React.FC<HeaderProps> = ({ buttonText }) => {
	return <button type="button">{buttonText}</button>;
};

export default Button;
