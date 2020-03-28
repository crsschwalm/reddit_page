import React from 'react';
import Comments from './Comments'

const Comment = ({ author, body, upvoteCount, created_utc, childComments = [] }) => {
    const timeAgo = created_utc

    return (
        <div className="comment-group">
            <div className="comment">
                <div className="title-group">
                    <span className="author">{author}</span>
                    <span className="upvotes">{upvoteCount}</span>
                    {" "}-{" "}
                    <span className="time-ago">{timeAgo}</span>
                </div>
                <p>{body}</p>
                <span className="delete">X</span>
            </div>
            <Comments comments={childComments} />
        </div>)
}

export default Comment