import React from 'react';

const Alert = (header,content,type) => {
    //pass over header text, content text and type (eg. primary, danger etc - as per bootstrap classNames)

    const alertStyle = `alert alert-${type}`
    return(
        <div className={alertStyle} role="alert">
            <h4 className="alert-heading">{header}</h4>
            <p>{content}</p>
        </div>
    )
}

export default Alert