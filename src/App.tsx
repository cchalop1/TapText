import React, { useState } from 'react';
import './App.css';
import { DisplayText } from './components/DisplayText';
import { TextEditor } from './components/TextEditor';
import { Light } from './components/Light';

const App = () => {
  const [isSameText, setSameText] = useState(true);

  return (
    <div className="App">
      <div className="main">
        <DisplayText />
        <Light isSameText={isSameText} />
        <TextEditor sameText={setSameText} />
      </div>
    </div >
  );
}

export default App;
