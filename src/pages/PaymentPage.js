import React from "react";
import Cookies from "universal-cookie";

const PaymentPage = () => {
	const handleClick = () => {
		const cookies = new Cookies();
		cookies.set("version", "home", { path: "/" });
		window.location.reload();
	};
	return (
		<div>
			<h2>Payment Page - {process.env.REACT_APP_VERSION}</h2>
			<button onClick={handleClick}>Navigate to Home App</button>
		</div>
	);
};

export default PaymentPage;
