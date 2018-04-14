import React, { Component } from 'react'

class Workout extends Component {

  handleClick = () => {
    this.props.onClick(this.props.workout.id)
  }

  handleDelete = () => {
    this.props.onDelete(this.props.workout.id)
  }
  
  render () {
    return(
      <div className="col s6 m3">
        <div className="tile card purple lighten-2" >
          <span className="deleteButton" onClick={this.handleDelete}>
            x
          </span>
      
          <h4 onClick={this.handleClick}>{this.props.workout.title}</h4>
          <p className='white-space-pre' onClick={this.handleClick}>{this.props.workout.description}</p>
        </div>
      </div>
      )
  }
}

export default Workout