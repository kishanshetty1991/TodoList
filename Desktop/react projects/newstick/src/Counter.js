import React from "react";

export class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// count: props.counter,
			count: 0,
		};
		this.increment = this.increment.bind(this);
	}
	increment() {
		//alert(this.state.count);
		this.setState((prevState) => {
			return {
				count: prevState.count + 1,
			};
		});
	}
	componentWillUnmount() {
		console.log("Unmounting.....");
	}
	componentDidMount() {
		console.log("Mounting.....");
	}
	decrement = () => {
		this.setState((prevState) => {
			return {
				count: prevState.count - 1,
			};
		});
	};
	render() {
		return (
			<div>
				<h1> counter : {this.state.count}</h1>
				<button onClick={this.increment}>Increment</button>
				<button onClick={this.decrement}>Decrement</button>
			</div>
		);
	}
}
