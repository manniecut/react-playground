/*
Drill 2 - Bomb:
A component that uses life-cycles, setInterval and 
state to alternate between rendering either "tick" or "tock" for 
a time and then rendering "BOOM!!!!".

The component should render a div element. Inside the div there 
should be a p that contains content of either "tick", "tock" or 
"BOOM!!!!".

The component will have an initial state with a property count of 0.

When the component mounts, register an interval that adds 1 to the 
count in state every second.

When the component unmounts, clear the interval.

When the count is divisible by 2, display the word "tick".

When the count isn't divisible by 2, display the word "tock".

If the count goes equal to or above 8, display "BOOM!!!!".

When the count goes above or equal to 8, also clear the interval!

Tips:
To check if a number is divisible by 2, you can use the modulo 
operator.
An interval will repeatedly invoke a callback as often as 
specified by the milliseconds argument.
You can create an interval by using 
let interval = setInterval(callback, timeInMs).
You can clear an interval by using clearInterval(interval).
*/

import React from 'react';

class Bomb extends React.Component {
    state = {
        counter: 0,
        bombState: "tick"
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                counter: (this.state.counter + 1)
            })
            console.log('ticking')
            this.handleExplosion();
        }, 1000)
    }
    handleExplosion = () => {
        if (this.state.counter === 9) {
            this.setState({
                counter: 0
            })
        } else if (this.state.counter === 8) {
            this.setState({
                bombState: 'BOOM!!!'
            })
        } else if (this.state.counter % 2) {
            this.setState({
                bombState: 'tick'
            })
        } else {
            this.setState({
                bombState: 'tock'
            })
        }
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    render() {
        return (
        <div>
        <p>Bomb State: {this.state.bombState}</p>
        </div>
        )
    }
}

export default Bomb;