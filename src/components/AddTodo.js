import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ''
    }
    render() {
        return (
            <div>
                <form style= {{ display: 'flex'}}>
                    <input 
                    type="text" name="title"
                    placeholder="Add Todo....."
                    className="inputBox"
                    />

                    <input 
                    type="submit" value="Submit"
                    className="btn"
                    style={{flex: '1'}}
                    />
                </form>
            </div>
        )
    }
}

export default AddTodo
