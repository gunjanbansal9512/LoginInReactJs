import React, { useState } from "react";
import "./LoginForm.css";

function LoginForm({ Login, error }) {
	const [details, setDetails] = useState({ email: "", password: "" });
	const submitHandle = (e) => {
		e.preventDefault();
		// if (CheckPassword(details.password)) {
		// 	alert("Password must be be");
		// }
		Login(details);
	};

	const inputHandle = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setDetails((preValue) => {
			// console.log(preValue);
			if (name === "email") {
				return { email: value, password: preValue.password };
			} else {
				return { email: preValue.email, password: value };
			}
		});
	};
	return (
		<div>
			<br />
			<form onSubmit={submitHandle}>
				<h2>Login</h2>
				{error !== "" ? <div className="error">{error}</div> : ""}
				<div className="form-group">
					<input
						type="email"
						className="form-control"
						id="emailBox"
						placeholder="Enter email"
						required
						name="email"
						//value={details.email}
						onChange={inputHandle}
					/>
				</div>
				<div className="form-group">
					<input
						name="password"
						type="password"
						className="form-control"
						id="passwordBox"
						placeholder="Password"
						required
						//value={details.password}
						onChange={inputHandle}
					/>
				</div>

				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		</div>
	);
}

export default LoginForm;
