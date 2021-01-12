import React from "react";
import "./EmployeeData.css";
function EmployeeData({ Logout }) {
	const data = [
		{
			id: 1,
			name: "test1",
			age: "11",
			gender: "male",
			email: "test1@gmail.com",
			phoneNo: "9191919191",
		},
		{
			id: 2,
			name: "test2",
			age: "12",
			gender: "male",
			email: "test2@gmail.com",
			phoneNo: "9292929292",
		},
		{
			id: 3,
			name: "test3",
			age: "13",
			gender: "male",
			email: "test3@gmail.com",
			phoneNo: "9393939393",
		},
	];
	const logout = () => {
		Logout();
	};
	return (
		<div>
			<div className="header">
				<h2>Welcome</h2>
				<button onClick={logout}>Logout</button>
			</div>

			<table className="table">
				<thead className="thead-dark">
					<tr>
						<th scope="col">#</th>
						<th scope="col">Name</th>
						<th scope="col">Age</th>
						<th scope="col">Gender</th>
						<th scope="col">Email</th>
						<th scope="col">Phone Number</th>
					</tr>
				</thead>

				{data.map((employee, index) => {
					return (
						<tbody block key={index}>
							<tr>
								<td>{index + 1}</td>
								<td>{employee.name}</td>
								<td>{employee.age}</td>
								<td>{employee.gender}</td>
								<td>{employee.email}</td>
								<td>{employee.phoneNo}</td>
							</tr>
						</tbody>
					);
				})}
			</table>
		</div>
	);
}

export default EmployeeData;
