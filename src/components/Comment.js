import React from 'react';
import Comments from './Comments'
import { useRedditPage } from './RedditPageProvider';

const Comment = ({ id, author, body, ups, downs, created_utc, body_html, ...restComments }) => {
    const timeAgo = created_utc
    const { comments } = useRedditPage();
    const childComments = comments.filter(({ parent_id }) => parent_id === id);
    const upvoteCount = () => {
        const total = ups - downs
        if (total > 999) {
            return `${Math.floor(total / 100) / 10}k`
        }
        return total
    };

    return (
        <>
            <div className="comment">
                <div className="title-group">
                    <a href={`https://reddit.com/user/${author}`} className="author">{author}</a>
                    <span className="upvotes">{upvoteCount()} points</span>
                    {" "}-{" "}
                    <span className="time-ago">{timeAgo}</span>
                    <span className="delete">X</span>
                </div>
                <p className="comment-body">{body}</p>
            </div>
            <Comments comments={childComments} className="nested" />
        </>)
}

export default Comment