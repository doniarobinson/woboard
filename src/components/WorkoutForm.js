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

  render() {
    return (
      <div className="col s6 m3">
        <div className="tile card purple lighten-4" >
          <form>
            <input className='input' type="text"
              name="title" value="new title" />
            <textarea className='input' name="description"></textarea>
          </form>
      </div>
    </div>
    );
  }
}

export default WorkoutForm