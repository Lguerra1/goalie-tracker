import React, { Component } from 'react'
import axios from 'axios';
import ListItems from './ListItems';


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

    componentDidMount() {
        axios.get('/api/goals')
            .then(response => {
                this.setState({ goals: response.data })
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

    updateGoal(goals) {
        this.setState({goals})
    }


    render() {
        let setGoals = this.state.goals.map((goal, index) => {
            return (
                < ListItems key={index + goal}
                    goal={goal}
                    index={index}
                    updateGoals={this.updateGoal.bind(this)}
                    deleterGoal={this.deleteGoal.bind(this)}
                />
            )
        })

        return (
            <div>
                <button className="button1" onClick={() => this.submitGoal()}>Submit</button>               
                <input value={this.state.input}
                    placeholder="Whats your goal?"
                    onChange={(e) => this.handleChange(e.target.value)} />

                <h2>{setGoals}</h2>

               

            </div>

        )
    }
}