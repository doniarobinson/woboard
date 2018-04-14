import React, { Component } from 'react'
import axios from 'axios'
import Workout from './Workout'

class WorkoutsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      workouts: []
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
  
  render() {
    return (
      <div className="row">
        {this.state.workouts.map((workout) => {
          return (<Workout workout={workout} key={workout.id} />)      
        })}
      </div>
    )
  }
}

export default WorkoutsContainer