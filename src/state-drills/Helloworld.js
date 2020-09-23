/*
Drill 1 - Hello World:
A component that changes its display according to buttons that update state. 
Utilising event handlers and state.

The component should render an outer div element. 
Inside the div there should be p element 
containing Hello, world. The word "world" should come from 
state in a property named who.

The component should also display 3 buttons, one for each: 
"World", "Friend" and "React".

When a user clicks on one of the 3 buttons, use state and 
an event handler to update the state 
property who so that the content in the p element changes.

If the user clicks the "Friend" button, the p displays Hello, friend!.
If the user clicks the "React" button, the p displays Hello, React!.
If the user clicks the "World" button, the p displays Hello, world!.
*/

import React from 'react';

class HelloWorld extends React.Component {
    state = {
        who: "world"
    }
    handleWorldClick = () => {
        this.setState({
            who: "world"
        })
    }
    handleReactClick = () => {
        this.setState({
            who: "React"
        })
    }
    handleFriendClick = () => {
        this.setState({
            who: "friend!"
        })
    }
    render() {
        return (
            <div>
                <p>Hello, {this.state.who}!</p>
                <button
                    onClick={this.handleWorldClick}>
                    World
                </button>
                <button
                    onClick={this.handleReactClick}>
                    React
                </button>
                <button
                    onClick={this.handleFriendClick}>
                    Friend
                </button>
            </div>
        )
    }

}

export default HelloWorld;