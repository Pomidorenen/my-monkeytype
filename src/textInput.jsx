import React, {useEffect, useState} from 'react';



const TextInput = ({text,complete,textInput,setTextInput}) => {
    const checkText =()=>{
        let compareText = [...text].slice(0,textInput.length).join('');
        return [compareText].includes(textInput);
    }
    useEffect(() => {
        const keyDownHandler = e=>{
            if(e.key === "Backspace"){
                if(textInput.length===0)return;
                let newTextInput = [...textInput];
                newTextInput.length--;
                setTextInput(newTextInput.join(''));
                return;
            }
            if(e.key === ' '){
                let newTextInput = textInput+" ";
                setTextInput(newTextInput);
                return;
            }
            let result = e.key.match(/[a-zA-Z]/g);
            if(result == null) return;
            if(result.length === 1){
                setTextInput(textInput+result);
            }
        }
        document.addEventListener('keydown',keyDownHandler);
        return ()=>{
            document.removeEventListener('keydown',keyDownHandler)
        }
    }, [setTextInput, textInput]);
    const [symbol,setSymbol] = useState('|');
   useEffect(()=>{
       const timer = setInterval(()=>{
           if(symbol==='|'){
               setSymbol(' ');
           }
           else {
               setSymbol('|');
           }
       },500);
       return () => clearInterval(timer);
   },[symbol]);

    useEffect(()=>{
        if([text].includes(textInput)) {
            setTextInput('');
            complete(textInput);
        }
    },[complete, setTextInput, text, textInput])

    return (
        <div className={`container-text ${!checkText()&&"red"}`}>
            {textInput}{symbol}
        </div>
    );
};

export default TextInput;