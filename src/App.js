import React, { Component } from 'react'
import './App.css'
import WorkoutsContainer from './components/WorkoutsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Workout Board</h1>
        </div>
        <WorkoutsContainer />
      </div>
    );
  }
}

export default App