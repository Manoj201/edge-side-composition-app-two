import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "pages/Home.page";
import PaymentPage from 'pages/PaymentPage'
import DashboardPage from 'pages/Dashboard.page'

function App() {
	return (
			<BrowserRouter >
				<Switch>
					<Route exact path="/" component={HomePage}/>
					<Route exact path="/payment" component={PaymentPage}/>
					<Route exact path="/dashboard" component={DashboardPage}/>
				</Switch>
			</BrowserRouter>
	);
}

export default App;
