import React from 'react'
import './App.css'
import ColumnsContainer from './Components/ColumnsContainer.js'
import Plotter from './Components/Plotter.js'
import Picker from './Components/Picker.js'
// import List from './Components/List.js'

function App() {
  return (
      <div className='row-flex'>
        <ColumnsContainer />
        <div className='col2 col-flex'>
          <Picker />
          <Plotter />
        </div>
      </div>
  );
}

export default App
