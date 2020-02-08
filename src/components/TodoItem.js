import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class TodoItem extends Component {
  getStyle = () => {
    return {
        fontFamily: 'Comic Sans Ms',
        color: 'ccc',
        background: '#f5f5f5',
        padding: '20px',
        marginBottom: '10px',
        border: '1px #ccc solid',
        borderRadius: '4px',
        textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
          {title}
          <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>x</button>
        </p>
      </div>
    )
  }
}

const btnStyle = {
    background: 'lightblue',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '20px',
    float: 'right',
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,

}

export default TodoItem