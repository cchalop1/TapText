import React, { useState, useEffect } from 'react';
import '../style/App.css';
import { DisplayText } from './DisplayText';
import { TextEditor, checkSameValue } from './TextEditor';
import { DisplayTimer } from './DisplayTimer';
import { Actions } from './Actions';
import { ChartHistory } from './ChartHistory';
import { LastTime } from './LastTime';

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
  const [initText, setInitText] = useState('Je suis la phrase que tu dois ecrire.');
  const [tapTextHistory, setTapTextHistory] = useState<Array<TapTextHistory>>([]);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(new Audio('https://lasonotheque.org/UPLOAD/mp3/1111.mp3'));
  const [lang, setLang] = useState<Array<boolean>>([true, false]);
  let textareaRef: React.RefObject<HTMLTextAreaElement> = React.createRef();


  useEffect(() => {
    let save: string | null = localStorage.getItem('history');
    if (save) {
      const listHistory: TapTextHistory[] = JSON.parse(save);
      setTapTextHistory(listHistory);
      setInitText(listHistory[listHistory.length - 1].text);
    }
  }, [])

  useEffect(() => {

    const addOneElementHistory = (newHistory: TapTextHistory) => {
      let historyCopy = tapTextHistory;
      historyCopy.push(newHistory);
      setTapTextHistory(historyCopy);
      localStorage.setItem('history', JSON.stringify(tapTextHistory));
    }

    if (text === '') {
      setIsActive(false);
      setTimer(0);
      return;
    }

    if (text.length === initText.length && checkSameValue(text, initText)) {
      addOneElementHistory(new TapTextHistory(text, timer));
      setText('');
      setSameText(false);
    }

  }, [text, initText, tapTextHistory, timer])

  const clearHistory = () => {
    setTapTextHistory([]);
    localStorage.clear();
  }

  return (
    <div className="App">
        <div className="time">
          <DisplayTimer timer={timer} isActive={isActive} history={tapTextHistory} intiText={initText} />
          <LastTime history={tapTextHistory} />
        </div>
        <div className="text-div">
          <DisplayText
            intiText={initText}
            setInitText={setInitText}
            text={text}
            setText={setInitText}
            isEdit={isEdit}
            audio={audio}
            lang={lang}
            history={tapTextHistory}
            setLang={setLang}
            setAudio={setAudio}
            setIsEdit={setIsEdit} />
          <TextEditor
            initText={initText}
            isSameText={isSameText}
            isEdit={isEdit}
            setSameText={setSameText}
            isActive={isActive}
            setIsActive={setIsActive}
            setTimer={setTimer}
            text={text}
            setText={setText}
            audio={audio}
            textareaRef={textareaRef}
          />
          <Actions
            history={tapTextHistory}
            clearHistory={clearHistory}
            isEdit={isEdit}
            textareaRef={textareaRef}
            setIsEdit={setIsEdit} />
          <p className="name">Create by <a href="https://cchalop1.com/">Clement Chalopin @cchalop1</a></p>
        </div>
        <div className="chart">
          <ChartHistory history={tapTextHistory} initText={initText} />
        </div>
    </div>
  );
}

export default App;
