import React from 'react'

const Workout = ({workout}) =>
  <div className="col s6 m3" key={workout.id} >
    <div className="tile card purple lighten-2" >
      <h4>{workout.title}</h4>
      <p className='white-space-pre'>{workout.description}</p>
    </div>
  </div>

export default Workout