import React from "react";

function UnlikeButton({ onLike }) {
    return (
        <div className="like-button">
            <button aria-label="unlike this" onClick={onLike}>
                <i className="material-icons unlike">favorite</i>
            </button>
        </div>
    );
}

export default UnlikeButton;
