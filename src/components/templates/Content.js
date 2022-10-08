import React from "react";
import TitleContent from "./TitleContent";
import BodyContent from "./BodyContent";
import LikeButton from "./LikeButton";
import UnlikeButton from "./UnlikeButton";

function Content({ titleContent, bodyContent, lastContent, onLikeCondition, onLike }) {
    return (
        <div className="content">
            <TitleContent titleContent={titleContent} />
            <BodyContent bodyContent={bodyContent} lastContent={lastContent} />
            {
                onLikeCondition
                    ? <UnlikeButton onLike={onLike} />
                    : <LikeButton onLike={onLike} />
            }
        </div>
    );
}

export default Content;
