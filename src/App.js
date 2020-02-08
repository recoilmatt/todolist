import React, { Component } from 'react';
import Todos from './components/Todos'
import './App.css';
import Header from './components/Header'
import AddTodo from './components/AddTodo'

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Do stuff',
        completed: false
      },
      {
        id: 3,
        title: 'Do more stuff',
        completed: false
      }
    ]
    }

  // Toggle Complete

	markComplete = (id) => {
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			})
		});
  };
  
  //Delete Todo

delTodo = (id) =>
 {
   this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
 }

 // im not sure what this does. look up spread operator and filter???

  render () {
    console.log(this.state.todos)
    return (
      <div className="App">
        <div className="container">
        < Header />
        < AddTodo />
        <Todos
										todos={this.state.todos}
                    markComplete={this.markComplete} 
                    delTodo={this.delTodo}
        />
        >
        </div>
      </div>
    );
  }
}

/* Pass the props using todos = this.state.todos like html attributes. Next, we figure how to access them using the Todos.js */

export default App;

