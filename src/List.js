import React, { Component } from 'react'
import axios from 'axios';


export default class List extends Component {
    constructor() {
        super()
        this.state = {
            goals: [],
            input: ''

        }
    }

    handleChange(value) {
        this.setState({
            input: value
        })
    }

    submitGoal() {
        axios.post('/api/goals', { goal: this.state.input })
            .then(response => this.setState({ goals: response.data }
            ))
    }

    deleteGoal(index) {
        axios.delete(`/api/goals/${index}`).then(response =>
            this.setState({ goals: response.data }))

    }

    updateGoal(index) {
        axios.put(`/api/goals/${index}`)
            .then(response => {
                console.log(response)
                this.setState({ goals: response.data })
            }
            )
    }

    componentDidMount() {
        axios.get('/api/goals')
            .then(response => {
                this.setState({ goals: response.data })
            })
    }

    render() {
        let setGoals = this.state.goals.map((goal, index) => {
            return (
                <div key={index}>{goal}</div>
            )
        })
        return (
            <div>

                <input value={this.state.input}
                    placeholder="Whats your goal?"
                    onChange={(e) => this.handleChange(e.target.value)} />


                <button className="button1" onClick={() => this.submitGoal()}>Submit</button>
                
                <button className="button2" onClick={() => this.deleteGoal()}>Remove Goal</button>
                <div>
                   
                <div><p> </p></div>
            
                
                <button className="button3" onClick={() => this.updateGoal()}>Update Goal</button>
                </div>

                <h2>{setGoals}</h2>




            </div>

        )
    }
}