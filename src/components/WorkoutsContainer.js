import React, { Component } from 'react'
import axios from 'axios'
import update from 'immutability-helper'
import Workout from './Workout'
import WorkoutForm from './WorkoutForm'

class WorkoutsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      workouts: [],
      editingWorkoutId: null
    }
  }
  
  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/workouts.json')
      .then(response => {
        //console.log(response)
        this.setState({workouts: response.data})
      })
      .catch(error => console.log(error))    
  }
  
  addNewWorkout = () => {
    axios.post(
      'http://localhost:3001/api/v1/workouts',
      { workout:
        {
          title: '',
          description: ''
        }
      }
    )
    .then(response => {
      //console.log(response)
      const workouts = update(this.state.workouts, {
        $splice: [[0, 0, response.data]]
      })
      this.setState({
        workouts: workouts,
        editingWorkoutId: response.data.id
      })
    })
    .catch(error => console.log(error))
  }
  
  render() {
    return (
      <div>
        <div className="row">
          <div className="col s2">
            <button className="newWorkoutButton waves-effect waves-light btn" onClick={this.addNewWorkout}>
              Add Workout
            </button>
          </div>
        </div>

        <div className="row">
          {this.state.workouts.map((workout) => {
            if(this.state.editingWorkoutId === workout.id) {
              return (<WorkoutForm workout={workout} key={workout.id} />)
            }
            else {
              return (<Workout workout={workout} key={workout.id} />)
            }
          })}
        </div>
      </div>
    )
  }
}

export default WorkoutsContainer