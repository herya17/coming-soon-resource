import React from "react";

function BodyContent({ bodyContent, lastContent }) {
    return (
        <div className="body-content">
            <p>{bodyContent}</p>
            <p>{lastContent}</p>
        </div>
    );
}

export default BodyContent;
