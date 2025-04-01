import { useState } from "react";
import "./App.css";
import ButtonGroup from "./components/ButtonGroup";
import Header from "./components/header";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Header title="TimeTracking App" />
			<div className="card">
				<button type="button" onClick={() => setCount((count) => count + 1)}>
					count may be {count}
				</button>
			</div>
			<ButtonGroup />
		</>
	);
}

export default App;
