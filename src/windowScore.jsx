import React from 'react';

const WindowScore = ({isDisabled,time,word,char}) => {
    return (
        <div className={isDisabled?"window-score window-score-disable":"window-score"}>
            <h6>
                Статистика
            </h6>
            <div className="window-score-body">
                <div>
                    время: {time.toFixed(2)}
                </div>
                <div>
                    кол-во слов: {word}
                </div>
                <div>
                    кол-во символов: {char}
                </div>
                <div>
                    средняя скорость печати(сек): {(char/time).toFixed(2)}
                </div>
            </div>
        </div>
    );
};

export default WindowScore;