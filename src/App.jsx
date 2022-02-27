import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import "./App.css"
import Calc from './components/Calc';
import RP from './rp.gif'


const App = () => {
  return (
    <div>
      < div className='container' >
        <Calc >
        </Calc>

      </div >
    </div>

  );
};
export default App;