import React from 'react';
import '../style/editor.css';
import { EditOption } from './EditOption';

interface Props {
    text: string;
    intiText: string;
    setText: (text: string) => void;
    isEdit: boolean;
    setIsEdit: (edit: boolean) => void;
    audio: HTMLAudioElement | null;
    setAudio: (param: HTMLAudioElement | null) => void;
}

export const DisplayText: React.FC<Props> = (props) => {

    const colorDisplayText = (initText: string, text: string) => {
        let allText = {
            progressText: '',
            diffText: '',
            refText: initText
        }
        for (let i = 0; i < text.length; i++) {
            if (text[i] === initText[i] && allText.diffText.length === 0) {
                allText.progressText += text[i];
            } else {
                allText.diffText += text[i];
            }
        }
        allText.refText = allText.refText.substring(allText.progressText.length);
        return (<div className="text"><p style={{
            color: "#AAA9A9"
        }}>{allText.progressText}</p><p style={{
            color: "red"
        }} >{allText.diffText}</p><p>{allText.refText}</p></div>);
    }

    return (
        <div className="edit-text">
            {props.isEdit ? <EditOption 
                intiText={props.intiText}
                audio={props.audio}
                setAudio={props.setAudio}
                setText={props.setText}
                />
                : colorDisplayText(props.intiText, props.text)}
        </div>
    );
};