import React from 'react';
import CounterItem from "../../components/counter/CounterItemTwo";

const CounterTwo = () => {
    return (
        <div className="brook-counterup-area pb--120 pb_md--80 pb_sm--60 bg_color--1">
            <div className="counter-fullwidth-grid">
                {content.map(item => (
                    <CounterItem
                        key={item.id}
                        title={item.title}
                        count={item.count}
                        iconClass={item.iconName}
                    />
                ))}
            </div>
        </div>
    );
};

const content = [
    {
        id: 1,
        title: "Satisfied clients",
        count: 2034,
        iconName: "ion-ios-people-outline"
    },
    {
        id: 2,
        title: "Unique Designs",
        count: 3034,
        iconName: "ion-ios-eye-outline"
    },
    {
        id: 3,
        title: "Completed Projects",
        count: 1052,
        iconName: "ion-ios-filing-outline"
    },
    {
        id: 4,
        title: "Global Branches",
        count: 52,
        iconName: "ion-ios-home-outline"
    }
]

export default CounterTwo;