import React, { useState, useEffect } from 'react';
import '../style/App.css';
import { DisplayText } from './DisplayText';
import { TextEditor, checkSameValue } from './TextEditor';
import { DisplayTimer } from './DisplayTimer';
import { History } from './History';
import { ChartHistory } from './ChartHistory';

export class TapTextHistory {
  text: string;
  time: number;
  date: string;
  constructor(text: string, time: number) {
    this.text = text;
    this.time = Date.now() - time;
    this.date = new Date().toString().split("GMT")[0];
  }
}

const App = () => {
  const [isSameText, setSameText] = useState(false);
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
      setSameText(false);
    }

    if (text === '') {
      setIsActive(false);
      setTimer(0);
    }

  }, [text, initText, tapTextHistory, timer])

  const clearHistory = () => {
    setTapTextHistory([]);
    localStorage.clear();
  }

  return (
    <div className="App">
      <div className="center">
        <DisplayTimer timer={timer} isActive={isActive} />
        <div className="main">
          <DisplayText text={initText} setText={setInitText} />
          <TextEditor
            initText={initText}
            isSameText={isSameText}
            setSameText={setSameText}
            isActive={isActive}
            setIsActive={setIsActive}
            setTimer={setTimer}
            text={text}
            setText={setText}
          />
        </div>
        <History history={tapTextHistory} clearHistory={clearHistory} />
      </div>
      <ChartHistory history={tapTextHistory} />

    </div>
  );
}

export default App;
