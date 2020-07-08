import React, { useState, useEffect } from 'react';
import './style/App.css';
import { DisplayText } from './components/DisplayText';
import { TextEditor, checkSameValue } from './components/TextEditor';
import { Light } from './components/Light';
import { DisplayTimer } from './components/DisplayTimer';
import { History } from './components/History';

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
  const [text, setText] = useState<string>('');
  const [isActive, setIsActive] = useState(false);
  const [initText, setInitText] = useState('bonjour bonjour bonjour');
  const [tapTextHistory, setTapTextHistory] = useState<Array<TapTextHistory>>([]);


  useEffect(() => {
    let save: string | null = localStorage.getItem('history');
    if (save)
      setTapTextHistory(JSON.parse(save));
  }, [])

  useEffect(() => {
    
    const addOneElementHistory = (newHistory: TapTextHistory) => {
      let historyCopy = tapTextHistory;
      historyCopy.push(newHistory);
      setTapTextHistory(historyCopy);
      localStorage.setItem('history', JSON.stringify(tapTextHistory));
    }

    if (text.length === initText.length && checkSameValue(text, initText)) {
      addOneElementHistory(new TapTextHistory(text, timer));
      setText('');
    }

    if (text === '') {
      setIsActive(false);
      setTimer(0);
    }

  }, [text, initText, tapTextHistory, timer])

  return (
    <div className="App">
      {isActive ? <DisplayTimer timer={timer} /> : <p>00:00:00</p>}
      <DisplayText text={initText} setText={setInitText} />
      <Light isSameText={isSameText} />
      <TextEditor
        initText={initText}
        setSameText={setSameText}
        isActive={isActive}
        setIsActive={setIsActive}
        setTimer={setTimer}
        timer={timer}
        text={text}
        setText={setText}
      />
      <History history={tapTextHistory} />
    </div>
  );
}

export default App;
