import React, {Component} from 'react'
import axios from 'axios';

export default class List extends Component {
    constructor(){
        super()
        this.state = {
            input: '',
            goals: []

        }
    }

    handleChange(value){
        this.setState({
            input: value
        })
    }

    submitGoal(){
        this.setState({
            goals: [...this.state.goals, this.state.input],
            input: ''
        })
    }

    render(){
        let setGoals = this.state.goals.map( (element, index) => {
            return(
                <h2 key={index}>{element}</h2>
            )
        })
        return(
            <div>

                <input value={this.state.input}
                placeholder="Whats your goal?" 
                onChange={(e) => this.handleChange(e.target.value)}/>
                <p>{this.state.input}</p>

                <button onClick={() => this.submitGoal()}>Submit</button>
                {setGoals}



            </div>
        
        )
    }
}