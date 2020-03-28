import React from 'react';
import Comment from './Comment'

const Comments = ({ comments = [], className = "comment-group" }) => {
    return (
        <div className={className}>
            {comments.map((comment, index) =>
                <Comment key={index} {...comment} />
            )}
        </div>)
}

export default Comments