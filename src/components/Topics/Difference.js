import React, {Component} from "react";

class Difference extends React.Component {
    constructor() {
        super();

        this.state = {
            number1: 0,
            number2: 0,
            difference: null
        }
    }

    updatedNumber1(val) {
        this.setState({ number1: parseInt(val, 10) });
    }

    updatedNumber2(val) {
        this.setState({ number2: parseInt(val, 10) });
    }

    subtract(num1, num2) {
        this.setState({ difference: num1 - num2 });
    }
    
    
    render() {
        return (
            <div className="puzzleBox differencePB">
                <h4>Difference</h4>
                <input className="inputLine" type="number" onChange = { (e) => this.updatedNumber1(e.target.value)}></input>
                <input className="inputLine" type="number" onChange = { (e) => this.updatedNumber2(e.target.value)}></input>
                <button className="confirmationBox" onClick = { () => this.subtract(this.state.number1, this.state.number2) }>Subtract</button>
                <span className="resultsBox">Difference: {this.state.difference}</span>
            </div>
        )
    }
}

export default Difference;