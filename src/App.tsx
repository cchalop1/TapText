import React, { useState } from 'react';
import './style/App.css';
import { DisplayText } from './components/DisplayText';
import { TextEditor } from './components/TextEditor';
import { Light } from './components/Light';
import { DisplayTimer } from './components/DisplayTimer';

export class TapTextHistory {
  text: string;
  time: number;
  constructor(text: string, time: number) {
    this.text = text;
    this.time = Date.now() - time;
  }
}

const App = () => {
  const [isSameText, setSameText] = useState(true);
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [text, setText] = useState('Pour modifier ce text il faut clicker sur le bouton edit');
  const [tapTextHistory, setTapTextHistory] = useState<Array<TapTextHistory>>([]);


  const addOneElementHistory = (newHistory: TapTextHistory) => {
    let historyCopy = tapTextHistory;
    historyCopy.push(newHistory);
    setTapTextHistory(historyCopy);
    console.log(tapTextHistory)
  }

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
        addOneElementHistory={addOneElementHistory}
        timer={timer}
      />
    </div >
  );
}

export default App;
