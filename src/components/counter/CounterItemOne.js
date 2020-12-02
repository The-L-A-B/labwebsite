import React, {useState} from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import CountUp from 'react-countup';

const CounterItemOne = ({iconClass, count, title}) => {

    const [appear, setAppear] = useState(false);

    const visibleHandler = (isVisible) => {
        isVisible && setAppear(true);
    };

    return (
        <div className="brook-counter brook-counter-1 text-center">
            <div className="icon">
                <i className={iconClass}/>
            </div>
            <div className="content">
                <VisibilitySensor onChange={(e) => visibleHandler(e)}>
                        <span className="count">
                            <CountUp start={appear ? 0 : null} end={count}/>
                        </span>
                </VisibilitySensor>
                <h6 className="heading heading-h6">{title}</h6>
            </div>
        </div>
    );
};

export default CounterItemOne;