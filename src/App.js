import React from 'react';
import './App.css'
import ColumnsContainer from './ColumnsContainer.js'
import Plotter from './Plotter';

function App() {
  return (
      <div className='row-flex'>
        <ColumnsContainer />
        <div className='col2 col-flex'>
          {/* imported dimension/measures */}
          <Plotter />
        </div>
      </div>
  );
}

export default App
