import { useState } from "react";
import "./App.css";
import ButtonGroup from "./components/ButtonGroup";
import Header from "./components/header";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Header title="TimeTracking App" />
			<ButtonGroup />
		</>
	);
}

export default App;
