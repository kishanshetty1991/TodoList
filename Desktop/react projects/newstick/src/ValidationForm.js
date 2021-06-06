import React from "react";
import "./Valid.css";

const initialState = {
	id: "",
	name: "",
	email: "",
	password: "",
	idError: "",
	nameError: "",
	passwordError: "",
	emailError: "",
};
export default class ValidationForm extends React.Component {
	state = initialState;

	// handleId = (event) => {
	// 	this.setState({ id: event.target.value });
	// };
	// handleName = (event) => {
	// 	this.setState({ name: event.target.value });
	// };
	// handlePass = (event) => {
	// 	this.setState({ password: event.target.value });
	// };
	// handleEmail = (event) => {
	// 	this.setState({ email: event.target.value });
	// };
	handleChange = (event) => {
		//ischeckbox = event.target.checked;
		this.setState({
			[event.target.name]: event.target.value,
		});
	};
	validate = () => {
		let idError = "";
		let nameError = "";
		let passwordError = "";
		let emailError = "";

		if (!this.state.id) {
			idError = "Id cannot be Null!!";
		}
		if (!this.state.name) {
			nameError = "Name cannot be Null!!";
		}
		if (!this.state.password) {
			passwordError = "Password cannot be Null!!";
		}
		if (!this.state.email.includes("@")) {
			emailError = "Email doesn't include @";
		}
		if (!this.state.email) {
			emailError = "Email cannot be null";
		}
		if (idError || nameError || passwordError || emailError) {
			this.setState({ idError, nameError, passwordError, emailError });
			return false;
		}

		return true;
	};
	handleSubmit = (event) => {
		event.preventDefault();
		const isValid = this.validate();
		if (isValid) {
			console.log(this.state);
			//Clear Form
			this.setState(initialState);
		}
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<input
						type="number"
						name="id"
						placeholder="ID"
						value={this.state.id}
						onChange={this.handleChange}
					/>
					<div style={{ fontSize: 15, color: "red" }}>
						{this.state.idError}
					</div>
				</div>
				<div>
					<input
						type="text"
						name="email"
						placeholder="Email"
						value={this.state.email}
						onChange={this.handleChange}
					/>
					<div style={{ fontSize: 15, color: "red" }}>
						{this.state.emailError}
					</div>
				</div>

				<div>
					<input
						name="name"
						placeholder="Name"
						value={this.state.name}
						onChange={this.handleChange}
					/>
					<div style={{ fontSize: 15, color: "red" }}>
						{this.state.nameError}
					</div>
				</div>

				<div>
					<input
						type="password"
						name="password"
						placeholder="Password"
						value={this.state.password}
						onChange={this.handleChange}
					/>
					<div style={{ fontSize: 15, color: "red" }}>
						{this.state.passwordError}
					</div>
				</div>

				<button type="submit">Submit</button>
			</form>
		);
	}
}
