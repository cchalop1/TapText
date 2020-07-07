import React, { useState } from 'react';
import './App.css';
import { DisplayText } from './components/DisplayText';
import { TextEditor } from './components/TextEditor';
import { Light } from './components/Light';

// interface Time {
//   time:number;
//   timeInterval: any;
// }

const App = () => {
  const [isSameText, setSameText] = useState(true);

  return (
    <div className="App">
      <DisplayText />
      <Light isSameText={isSameText} />
      <TextEditor setSameText={setSameText} />
    </div >
  );
}

export default App;
