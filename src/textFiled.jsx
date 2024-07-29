import React, {useState} from 'react';
import TextInput from "./textInput";
import TextTask from "./textTask";
import SettingWindow from "./settingWindow";
import WindowScore from "./windowScore";


const TextFiled = () => {
    const collectionWords = [
        'hello','world','see','dog','cat','fish','out',
        'inside','dance','list','paper','rock','scissors',
        'football','in','shadow','dream','end','line'];

    const [text,setText] = useState('hello world');
    const [textInput,setTextInput] = useState('');
    const [time,setTime] = useState(Date.now());
    const [countTime,setCountTime] = useState(0);
    const [countWord, setCountWord] = useState(0);
    const [countChar,setCountChar] = useState(0);
    const [isDisabled,setIsDisabled] = useState(true)
    const [valueWords, setValueWords] = useState(15);
    const generateText = (value)=>{
        const len = collectionWords.length;
        return new Array(value).fill("s").map(el=>collectionWords[Math.floor(Math.random()*len)]).join(" ");
    }
    const complete = (input)=>{
        setCountChar([...input].length)
        setCountWord(input.split(/\s/g).length)
        setCountTime((Date.now()-time)/1000);
        setTime(Date.now());
        setText(generateText(valueWords,collectionWords))
        setIsDisabled(false)
    }

    return (
        <div className='container'>
            <br/>
            <WindowScore isDisabled ={isDisabled}
                         time={countTime}
                         word={countWord}
                         char={countChar}>
            </WindowScore>
            <br/>
            <SettingWindow generate ={(value)=>{setIsDisabled(true);setTime(Date.now());setText(generateText(value,collectionWords));
                            setTextInput('')}}
                           text  ={textInput}
                           complete = {()=>{complete(textInput);setTextInput('')} }
                           word={valueWords}
                           setWords = {setValueWords}/>
            <br/>
            <TextTask  text={text}/>
            <TextInput text={text} complete={complete}
                       textInput={textInput}
                       setTextInput={setTextInput}
            />
        </div>
    );
};

export default TextFiled;