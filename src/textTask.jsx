import React from 'react';

const TextTask = ({text,...props}) => {
    return (
        <div className="container-text gray">
            {text}
        </div>
    );
};

export default TextTask;