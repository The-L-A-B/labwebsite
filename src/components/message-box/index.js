import React from 'react';

const MessageBoxItem = ({type, content}) => {
    return (
        <div className={`message-box message-box--${type} mt--30`}>
            <div className="icon">
                <i
                    className={`fa fa-${type === 'light' ? 'flag' : type === 'danger' ? 'bell' : type === 'success' ? 'check-circle' : type === 'primary' ? 'info-circle' : null}`}
                />
            </div>
            <div className="content">{content}</div>
        </div>
    );
};

export default MessageBoxItem;
