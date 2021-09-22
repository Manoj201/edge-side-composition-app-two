import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "pages/Home.page";
import PaymentPage from 'pages/PaymentPage'

function App() {
	return (
			<BrowserRouter >
				<Switch>
					<Route exact path="/" component={HomePage}/>
					<Route exact path="/payment" component={PaymentPage}/>
				</Switch>
			</BrowserRouter>
	);
}

export default App;
