import React from 'react';
import formatPoints from '../services/format-points';

const PostHead = ({ subreddit, upvoteCount, title }) => {
    return (
        <header className="post-head">
            <a href={`https://reddit.com/${subreddit}`} className="subreddit">
                {subreddit}
            </a>
            <div className="title-group">
                <span className="upvote">{formatPoints(upvoteCount)}</span>
                <h1 className="title">{title}</h1>
            </div>
        </header>
    )
}

export default PostHead