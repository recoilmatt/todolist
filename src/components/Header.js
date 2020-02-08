import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div style={HeaderStyle}>
                <p>Task List for Today</p>
            </div>
        )
    }
}

const HeaderStyle = {
    fontFamily: 'Comic Sans MS',
    fontSize: '5vw',
    textAlign: 'center',
}
export default Header
