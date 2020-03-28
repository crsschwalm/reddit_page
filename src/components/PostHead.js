import React from 'react';

const PostHead = ({ subreddit, upvoteCount, title }) => {
    return (
        <header className="post-head">
            <span className="subreddit">
                {subreddit}
            </span>
            <div className="title-group">
                <span className="upvote">{upvoteCount}</span>
                <h1 className="title">{title}</h1>
            </div>
        </header>
    )
}

export default PostHead