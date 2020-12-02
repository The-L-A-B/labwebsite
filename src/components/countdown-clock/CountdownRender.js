import React, {Fragment} from 'react';

const Renderer = ({days, hours, minutes, seconds}) => {
    return (
        <Fragment>
            <span className="ht-count">
                <span className="count-inner">
                    <span className="time-count">{days}</span>
                    <p>days</p>
                </span>
            </span>
            <span className="ht-count">
                <span className="count-inner">
                    <span className="time-count">{hours}</span>
                    <p>Hours</p>
                </span>
            </span>
            <span className="ht-count">
                <span className="count-inner">
                    <span className="time-count">{minutes}</span>
                    <p>Minutes</p>
                </span>
            </span>
            <span className="ht-count">
                <span className="count-inner">
                    <span className="time-count">{seconds}</span>
                    <p>Seconds</p>
                </span>
            </span>
        </Fragment>
    )
};

export default Renderer;
