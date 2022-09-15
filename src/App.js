import React from 'react'
import './App.css'
import ColumnsList from './Components/ColumnsList.js'
import Plotter from './Components/Plotter.js'
import Picker from './Components/Picker.js'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from "react-dnd-html5-backend";
// import DragApp from './Components/dragndrop/DragApp'
// import DragApp from './Components/dragndrop/DragApp'

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className='row-flex'>
        <ColumnsList />
        <div className='col2 col-flex'>
          <Picker />
          <Plotter />
        </div>
      </div>
    </DndProvider>
  );
}

export default App
