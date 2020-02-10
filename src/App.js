import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';

import { BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';


class App extends Component {
  state = {
    todos: [
          ]
    }

    componentDidMount() {
      axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({todos:res.data}))
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


delTodo = (id) => {
  axios
    .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((res) =>
      this.setState({
        todos: [...this.state.todos.filter((todo) => todo.id !== id)]
      })
    );
};

 //Add Todo -- posts to the jsonplacer and gives us a response back. Then it takes res.data gives back a new todo.
 
 addTodo = (title) => {
  axios.post('https://jsonplaceholder.typicode.com/todos', {
    title,
    completed: false
  })
  
    .then(res => this.setState({ todos: 
    [...this.state.todos, res.data] }));
 }

 // im not sure what this does. look up spread operator and filter??? What does ... do??
  render () {
 
    return (
      <Router>
      <div className="App">
        <div className="container">
        < Header />
   
     
        <Route exact path="/" render= {props => (
            <React.Fragment>
                 < AddTodo addTodo = {this.addTodo} />
                 < Todos
										todos={this.state.todos}
                    markComplete={this.markComplete} 
                    delTodo={this.delTodo} />
              </React.Fragment>
        )} />
      
          <Route path="/about" component={About} />

        </div>
      </div>
      </Router>
    );
  }
}

/* Pass the props using todos = this.state.todos like html attributes. Next, we figure how to access them using the Todos.js */

export default App;

