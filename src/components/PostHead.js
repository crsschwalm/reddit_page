import React from 'react';

const PostHead = ({ subreddit, upvoteCount, title }) => {
    return (
        <header className="post-head">
            <span className="subreddit">
                {subreddit}
            </span>
            <div className="title-group">
                <span>{upvoteCount}</span>
                <h1>{title}</h1>
            </div>
        </header>
    )
}

export default PostHead