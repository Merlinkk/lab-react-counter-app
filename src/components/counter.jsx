import { Component } from "react";

class counter extends Component{
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    incrementCount(){
        this.setState({
            count: this.state.count + 1
        })
    }

    decrementCount(){
        this.setState({
            count: this.state.count - 1
        })
    }

    resetCount(){
        this.setState({
            count: 0
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button className="btn" onClick={() => this.incrementCount()}>+</button>
                <button className="btn"  onClick={() => this.resetCount()}>Reset</button>
                <button className="btn" onClick={() => this.decrementCount()}>-</button>
            </div>
        )
    }

}

export default counter;