import React, { Component } from 'react';
import TodoList from './components/TodoList';

class App extends Component {
	//Initial state
	state = {
		items: [
			{ id: 0, text: 'Buy grocery', done: true },
			{ id: 1, text: 'Play guitar', done: false },
			{ id: 2, text: 'Romantic dinner', done: false },
		],
	};

	//Mark as completed
	handleItemClick = (item, event) => {
		event.preventDefault();
		//get items from state
		const nTodos = this.state.items;
		//if a task is not marked as done, we change its state to done.
		if (nTodos[item].done === false) {
			nTodos[item].done = true;
			console.log('We are allowing only click when the task is marked as false');
			//Update state
			this.setState({ items: nTodos });
		}
		return;
	};
	handleClear = () => {
		//We can use these out this class but for now is not necessary
		const defaultItems = [
			{ id: 0, text: 'Buy grocery', done: false },
			{ id: 1, text: 'Play guitar', done: false },
			{ id: 2, text: 'Romantic dinner', done: false },
		];
		this.setState({ items: defaultItems });
	};
	render() {
		//get properties from our state.. We are using ES6 Destructuring
		const { items } = this.state;
		return (
			<div>
				<TodoList items={items} onClick={this.handleItemClick} />
				<button onClick={this.handleClear}>Clear</button>
			</div>
		);
	}
}

export default App;
