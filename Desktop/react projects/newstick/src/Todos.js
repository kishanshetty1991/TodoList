import React from "react";

export default function Todos(props) {
	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			<div
				style={{
					textDecoration: props.complete ? "line-through" : null,
				}}
				onClick={props.toggleComplete}
			>
				{props.text} &nbsp;
			</div>
			<button onClick={props.onDelete}> X </button>
		</div>
	);
}
