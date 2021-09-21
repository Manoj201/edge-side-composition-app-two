import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "pages/Home.page";

function App() {
	return (
		<div className="App">
			<Router basename="/payments">
				<Switch>
					<Route path="/dashbord">
						<HomePage />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
