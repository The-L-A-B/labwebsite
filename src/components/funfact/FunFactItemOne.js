import React, {useState} from 'react';
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const FunfactItemOne = ({number, title, content, className}) => {
    const [appear, setAppear] = useState(false);

    const visibleHandler = (isVisible) => {
        isVisible && setAppear(true);
    };
    return (
        <div className={`number-wrap wow move-up ${className}`}>
            <VisibilitySensor onChange={(e) => visibleHandler(e)}>
                <span className="count theme-color">
                    <CountUp start={appear ? 0 : null} end={number}/>
                </span>
            </VisibilitySensor>
            <div className="content">
                <h6>{title}</h6>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default FunfactItemOne;
