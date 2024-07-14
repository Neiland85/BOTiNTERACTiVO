import React from 'react';

const BotHead = () => {
    return (
        <div className="bot-head">
            <img src="/path/to/robot-face.svg" alt="Robot Face" />
            <audio controls>
                <source src="/path/to/cloned-voice.mp3" type="audio/mpeg" />
            </audio>
        </div>
    );
};

export default BotHead;

