import React from "react";
import Cookies from "universal-cookie";
import { useHistory } from "react-router-dom";

const PaymentPage = () => {
  let history = useHistory();
	const handleClick = () => {
		const cookies = new Cookies();
		cookies.set("version", "home", { path: "/" });
		window.location.href = "/";
	};
	return (
		<div>
			<h2>Payment Page - {process.env.REACT_APP_VERSION}</h2>
			<button onClick={handleClick}>Navigate to Home App</button>
			<button onClick={() => {
        history.push('/dashboard')
      }}>Navigate to Dashboard page</button>
		</div>
	);
};

export default PaymentPage;
