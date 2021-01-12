import "./App.css";
import React, { useState } from "react";
import LoginForm from "./LoginForm";
import EmployeeData from "./EmployeeData";

function App() {
	const [user, setUser] = useState({ name: "", email: "" });
	const [error, setError] = useState("");
	function CheckPassword(inputtxt) {
		console.log(inputtxt);
		var decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,2000}$/;
		// if (inputtxt.value.match(decimal)) {
		// 	return true;
		// } else {
		// 	return false;
		// }
		return decimal.test(inputtxt);
	}
	const Login = (details) => {
		// console.log(details);
		if (!CheckPassword(details.password)) {
			setError(
				"Password should be more than 8 characters and it should contain one upper case, one lower case, one number and 1 special character"
			);
		} else {
			setUser({
				name: "Admin",
				email: details.email,
			});
		}
	};

	const Logout = () => {
		setUser({
			name: "",
			email: "",
		});
		setError("");
	};
	return (
		<div className="container">
			{user.email !== "" ? (
				<div>
					<EmployeeData Logout={Logout} />
				</div>
			) : (
				<div>
					<LoginForm Login={Login} error={error} />
				</div>
			)}
		</div>
	);
}

export default App;
