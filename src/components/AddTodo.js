import React, { Component } from 'react'


export class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    //Set the title to whatever we type in.

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} style= {{ display: 'flex'}}>
                    
                    <input 
                    type="text" 
                    name="title"
                    placeholder="Add Todo....."
                    className="inputBox"
                    value={this.state.title}
                    onChange={this.onChange}
                    style={{flex: '1'}}
                    />

                    <input 
                    type="submit" 
                    value="Submit"
                    className="btn"
                    style={{flex: '1'}}
                    />
                </form>
            </div>
        )
    }
}

export default AddTodo
