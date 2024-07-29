import React, {Fragment, useState} from 'react';


const SettingWindow = ({setWords,generate,word}) => {
    const [level,setLevel]=useState('word')
    const [time,setTime]=useState(15)
    const levels = [
        {value:'word',text:"текст"},
    ]
    const play = ()=>{
            if(level === 'word')generate(word,);
    }
    return (
        <div className="setting">
            <div className="container-label">
            {
                levels.map(({value,text},index)=>
                        <Fragment>
                        <input type="radio" name="level"
                               id = {'radioSelectSetting'+index}
                               value={value}
                               checked={value === level}
                               onChange={e=>{
                                    setLevel(e.target.value);
                                    }
                                }
                        />
                        <label for = {'radioSelectSetting'+index} className="setting-label">
                        {text}
                        </label>
                        </Fragment>
                )
            }
            </div>
            <div className="container-button" >
                <div style={{display: 'flex',alignItems:"center"}}>
                    {level==='word'?"кол-во слов":"время"}
                </div>
                <input type="number"  placeholder='кол-во слов'
                       value={word}
                       onChange={e => {
                           setWords(e.target.value)
                       }}
                       className={level==='word'?"setting-input":' setting-input disable'}
                />
                <input type="number"  placeholder='время'
                       value={time}
                       onChange={e => {
                           setTime(e.target.value)
                       }}
                       className={level==='time'?"setting-input":' setting-input disable'}
                />
                <a className="setting-button" onClick={play}>
                    play
                </a>
            </div>

        </div>
    );
};

export default SettingWindow;