import React from "react";

export default class Randomuser extends React.Component {
	state = {
		loading: true,
		//person: null,//if only 1 person comes from api then
		people: [],
	};

	async componentDidMount() {
		//async and await as data coming from url is asyncronous
		const url = "https://api.randomuser.me/?results=5"; //url of website without ?results=5 it will give only 1 data at [0]th location
		const response = await fetch(url); //fetch is a function which gets data or you
		const data = await response.json(); //response.json is a function to get data in json format
		//console.log(data.results);
		this.setState({
			// person: data.results[1],Gives an array but only of 1 person data
			people: data.results, //Gives an array of persons data
			loading: false,
		});
		//for no user
		// this.setState({
		// 	person: null,
		// 	loading: false,
		// });
	}

	render() {
		if (this.state.loading) {
			return <div>Your Random User is Loading.... </div>;
		}
		if (!this.state.people.length) {
			return (
				<div>
					Your Random User is not available at this moment Sorry!!{" "}
				</div>
			);
		}
		//using foreach instead of map and outside render you can also use map
		// const peopleJsx = [];
		// this.state.people.forEach( person => {
		// 	peopleJsx.push(
		// 		<div key={person.login.uuid}>
		// 			{person.name.title} {person.name.first} {person.name.last}{" "}
		// 			from {person.location.country}
		// 			<br />
		// 			<img src={person.picture.large} />
		// 		</div>
		// 	);
		// });

		return (
			<div>
				{
					//for adding loading through terenary operator
					/*{this.state.loading ? (
					<div> Loading... </div>
				) : (*/
				}
				{/*{this.state.people.map((
					person,
					index // if you havent got unique id from url then u ca use index
				) => (
					<div key={index}>*/}
				{/*if fetching data from state for person
				<div>
					{this.state.person.name.title}{" "}
					{this.state.person.name.first} {this.state.person.name.last}{" "}
					from {this.state.person.location.country}
					<br />
					<img src={this.state.person.picture.large} />
				</div>*/}
				{/*Using Map and inside return*/}
				{this.state.people.map((
					person,
					index // if you have got unique id from url then you can use this
				) => (
					<div key={person.login.uuid}>
						{person.name.title} {person.name.first}{" "}
						{person.name.last} from {person.location.country}
						<br />
						<img src={person.picture.large} />
					</div>
				))}
				}{/*{peopleJsx}*/}
			</div>
		);
	}
}
