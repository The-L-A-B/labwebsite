import React from 'react';
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressbarCircle = ({percentage, bgColor, strokeWidth}) => {
    return (
        <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            minValue={0}
            maxValue={100}
            strokeWidth={strokeWidth ? strokeWidth : 3}
            styles={buildStyles({
                strokeLinecap: 'butt',
                pathTransitionDuration: 0.5,
                pathColor: bgColor,
                trailColor: '#eeeeee',
                textColor: '#222222',
                textSize: '10px'
            })}
        />
    );
};

export default ProgressbarCircle;