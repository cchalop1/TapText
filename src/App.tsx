import React, { useState } from 'react';
import './App.css';
import { DisplayText } from './components/DisplayText';
import { TextEditor } from './components/TextEditor';

const App = () => {
  const [isSameText, setSameText] = useState(true);

  return (
    <div className="App">
      <div className="main">
        <DisplayText />
        <div className="light" style={{
          backgroundColor: isSameText ? 'green' : 'red',
        }}></div>
        <TextEditor sameText={setSameText}/>
      </div>
    </div >
  );
}

export default App;
