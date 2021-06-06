import React from "react";

export default class MyForm extends React.Component {
	state = {
		title: "Mr.",
		name: "",
		food: "",
		addr: "",
		rem: false,
		password: "",
	};

	handleChange = (event, fieldname, ischeckbox) => {
		//console.log(event.target.value);
		this.setState({
			[fieldname]: ischeckbox ? event.target.checked : event.target.value,
		});
	};

	// handleCheck = (event) => {
	// 	//console.log(event.target.value);
	// 	this.setState({
	// 		rem: event.target.checked,
	// 		//rem: this.state.rem,
	// 	});
	// };
	handleSelect = (event) => {
		//console.log(event.target.value);
		this.setState({ title: event.target.value });
	};
	handlePass = (event) => {
		//console.log(event.target.value);
		this.setState({
			password: event.target.value,
		});
	};
	handleSubmit = (event) => {
		event.preventDefault();
		console.log(this.state);
	};
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<select
					value={this.state.title}
					onChange={(event) => this.handleChange(event, "title")}
				>
					<option>Mr.</option>
					<option>Mrs.</option>
					<option>Miss.</option>
					<option>Ms.</option>
				</select>
				<div>
					Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<input
						//name="name"
						value={this.state.name}
						onChange={(event) => this.handleChange(event, "name")}
					/>
				</div>
				<div>
					Favourite Food
					<input
						value={this.state.food}
						onChange={(event) => this.handleChange(event, "food")}
					/>
				</div>
				<div>
					Address
					<textarea
						value={this.state.addr}
						onChange={(event) => this.handleChange(event, "addr")}
						cols="20"
					/>
				</div>
				<div>
					Password
					<input
						value={this.state.password}
						onChange={this.handlePass}
					/>
				</div>
				<div>
					Remember me
					<input
						type="checkbox"
						checked={this.state.rem}
						onChange={(event) => this.handleChange(event, "rem")}
					/>
				</div>
				<div
					style={
						this.state.name &&
						this.state.food &&
						this.state.addr &&
						this.state.rem
							? {}
							: { display: "none" }
					}
				>
					{this.state.title} {this.state.name} loves {this.state.food}{" "}
					and{" "}
					{this.state.title === "Mr." || this.state.title === "Ms."
						? "he "
						: "she "}
					lives in {this.state.addr}
				</div>
				<div>
					<button type="submit"> Submit </button>
				</div>
			</form>
		);
	}
}
