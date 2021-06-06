import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todos";

export default class TodoList extends React.Component {
	/*
     1.Add Todos
     2.Display Todos
     3.Cross Off Todo
     4.Show number of Active Todos
     5.Filter all /active / complete
     6.Delete Todo
     7.Delete All Complete
       7.1 Only show if atleat One is Complete
     8.Button to toggle On/Off  
	*/
	state = {
		todos: [],
		toShow: "all",
		toggleAllComplete: true,
	};
	addTodos = (todo) => {
		this.setState({
			todos: [todo, ...this.state.todos],
		});
	};

	toggleComplete = (id) => {
		this.setState({
			todos: this.state.todos.map((todo) => {
				//Update todo which you want to update

				if (todo.id === id) {
					return {
						...todo,
						complete: !todo.complete,
					};
				} else {
					return todo;
				}
			}),
		});
	};

	handleChange = (s) => {
		this.setState({
			toShow: s,
		});
		//console.log(this.state.toShow);
	};

	handleDelete = (id) => {
		this.setState({
			todos: this.state.todos.filter((todo) => todo.id !== id),
		});
	};

	handleAllCompletedDelete = () => {
		this.setState((state) => ({
			todos: state.todos.filter((todo) => !todo.complete),
		}));
	};
	handleToggle = () => {
		this.setState({
			todos: this.state.todos.map((todo) => ({
				...todo,
				complete: this.state.toggleAllComplete,
			})),
			toggleAllComplete: !this.state.toggleAllComplete,
		});
	};

	render() {
		let todos = [];

		if (this.state.toShow === "all") {
			todos = this.state.todos;
		} else if (this.state.toShow === "active") {
			todos = this.state.todos.filter((todo) => !todo.complete);
		} else if (this.state.toShow === "complete") {
			todos = this.state.todos.filter((todo) => todo.complete);
		}

		return (
			<div>
				<h3 align="center">Todo App</h3>
				<TodoForm onSubmit={this.addTodos} />
				<br />
				<h4 style={{ color: "purple" }}>
					Todos Left --> &nbsp;
					{todos.filter((todo) => !todo.complete).length}
				</h4>
				<br />
				{todos.map((todo) => (
					<h4 style={{ color: todo.complete ? "green" : "red" }}>
						<Todo
							key={todo.id}
							toggleComplete={() => this.toggleComplete(todo.id)}
							complete={todo.complete}
							text={todo.text}
							onDelete={() => this.handleDelete(todo.id)}
						/>
					</h4>
				))}
				<div>
					<button onClick={() => this.handleChange("all")}>
						Show All
					</button>
					<button onClick={() => this.handleChange("active")}>
						Show Active
					</button>
					<button onClick={() => this.handleChange("complete")}>
						Show Completed
					</button>
				</div>
				{todos.some((todo) => todo.complete) ? (
					<button onClick={this.handleAllCompletedDelete}>
						Delete all Completed
					</button>
				) : null}
				<div>
					<button onClick={this.handleToggle}>
						Toggle All Complete {`${this.state.toggleAllComplete}`}
					</button>
				</div>
			</div>
		);
	}
}
