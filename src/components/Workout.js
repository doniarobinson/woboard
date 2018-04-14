import React from 'react'

const Workout = ({workout}) =>
  <div className="col s6 m3" key={workout.id} >
    <div className="card purple lighten-2" >
      <h4>{workout.title}</h4>
      <p>{workout.description}</p>
    </div>
  </div>

export default Workout