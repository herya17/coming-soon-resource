import React from "react";

function LikeButton({ onLike }) {
    return (
        <div className="like-button">
            <button aria-label="like this" onClick={onLike}>
                <i className="material-icons">favorite_border</i>
            </button>
        </div>
    );
}

export default LikeButton;
