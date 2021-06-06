import React from "react";
export const Body = (props) => {
	return (
		<div>
			<p>{props.text}</p>
			<p>{props.text2}</p>
			<p>{props.myFunction(1, 2)}</p>
			<p>{props.myFunction2(1, 2)}</p>
		</div>
	);
};
