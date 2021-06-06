import React from "react";

export default class ImageSlider extends React.Component {
	state = {
		images: [
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_LwmgrhBJrBRFZCUTSAX-pDi6egFhvaRrUw&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV_qb-o03GgmM-_Lk6idcny86eIXaLjkxtlw&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJH9jC8N-q9pQPaWEopvHGTSj1YjKBQUFMMw&usqp=CAU",
		],
		index: 0,
	};

	handleClick = () => {
		this.setState(
			(prevState) => {
				return {
					index: prevState.index + 1,
				};
			},
			(callback) => {
				return {
					index: this.state.index - 1,
				};
			}
		);
	};

	handleClick2 = () => {
		this.setState((prevState) => {
			return {
				index: this.state.index - 1,
			};
		});
	};

	render() {
		return (
			<div>
				<img
					src={this.state.images[this.state.index]}
					width={100}
					height={100}
				/>
				<br />
				<button onClick={this.handleClick}>Next Image </button>
				<button onClick={this.handleClick2}>Back the Image </button>
			</div>
		);
	}
}
