import React, { Component } from 'react'
import axios from 'axios'

class WorkoutForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.workout.title,
      description: this.props.workout.description
    }
  }

  handleInput = (e) => {
    this.props.resetNotification()
    this.setState({[e.target.name]: e.target.value})
  }
  
  handleBlur = () => {
    const workout = {
      title: this.state.title,
      description: this.state.description
    }
    
    axios.put(
    `http://localhost:3001/api/v1/workouts/${this.props.workout.id}`,
    {
      workout: workout
    })
  .then(response => {
    //console.log(response)
    this.props.updateWorkout(response.data)
  })
  .catch(error => console.log(error))
  }
  
  render() {
    return (
      <div className="col s6 m3">
        <div className="tile card purple lighten-4" >
          <form onBlur={this.handleBlur} >
            <input className='input' type="text"
              name="title" value={this.state.title} onChange={this.handleInput} ref={this.props.titleRef} />
            <textarea className='input' name="description" value={this.state.description} onChange={this.handleInput}></textarea>
          </form>
      </div>
    </div>
    );
  }
}

export default WorkoutForm