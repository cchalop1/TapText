import React, { useState } from 'react';
import './App.css';
import { initialValue } from './initialValue';
import { DisplayText } from './components/DisplayText';
import { TextEditor } from './components/TextEditor';
import { Light } from './components/Light';
import { DisplayTimer } from './components/DisplayTimer';

const App = () => {
  const [isSameText, setSameText] = useState(true);
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [text, setText] = useState(initialValue);

  return (
    <div className="App">
      {isActive ? <DisplayTimer timer={timer} /> : <p>00:00:00</p>}
      <DisplayText text={text} setText={setText} />
      <Light isSameText={isSameText} />
      <TextEditor
        text={text}
        setSameText={setSameText}
        isActive={isActive}
        setIsActive={setIsActive}
        setTimer={setTimer}
      />
    </div >
  );
}

export default App;
