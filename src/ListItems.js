import React, {Component} from 'react'
import axios from 'axios';

export default class ListItems extends Component{
    constructor(props){
        super(props)
        this.state = {
            editing: false,
            input: this.props.goal
        }
    }

    toggleEdit(){
        if (this.state.editing){
            axios.put(`/api/goals/${this.props.index}`, {goal: this.state.input})
            .then(response => {
                this.props.updateGoals(response.data)
                this.setState({ editing: false })
            }).catch(error => console.log(error))
            
        } else {
            this.setState({editing: true})
        }
    }

    toggleDelete(){
        this.props.deleterGoal(this.props.index)
    }

    handleInput(val){
        this.setState({ input: val })
    }


    render(){
        return(

            <div>
                {this.state.editing
                ? <input value={this.state.input} onChange={(e) => this.handleInput(e.target.value)}/>
                : <span>{this.state.input}</span>
                }
                <button className="button2" onClick={() => this.toggleEdit()}>Edit</button>
                <button className="button3" onClick={() => this.toggleDelete()}>Delete</button>
              
            
            </div>
        )
    }
    
}

