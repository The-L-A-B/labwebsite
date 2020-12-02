import React, {useState} from 'react';
import VisibilitySensor from "react-visibility-sensor";

const ProgressbarLine = ({title, bgColor, percentage}) => {

    const [appear, setAppear] = useState(false);

    const visibilityHandler = (isVisible) => {
        isVisible && setAppear(true);
    };

    return (
        <VisibilitySensor onChange={(e) => visibilityHandler(e)}>
            <div className="progress-charts mt--40">
                <h6 className="heading heading-h6">{title}</h6>
                <div className="progress">
                    <div className="progress-bar" style={{width: appear ? percentage : 0, backgroundColor: bgColor}}>
                        <span className="percent-label">{percentage}</span>
                    </div>
                </div>
            </div>
        </VisibilitySensor>
    );
};

export default ProgressbarLine;