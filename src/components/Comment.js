import React from 'react';
import formatPoints from '../services/format-points'
import formatDateDifference from '../services/format-date-difference'
import Comments from './Comments'
import { useRedditPage } from './RedditPageProvider';

const Comment = ({ id, author, body, ups, downs, created_utc, isDeleted }) => {
    const { comments, deleteComment } = useRedditPage();
    const childComments = comments.filter(({ parent_id }) => parent_id === id);

    const commentLastEdit = new Date(created_utc * 1000)
    const timeAgo = formatDateDifference(commentLastEdit)

    return (
        <>
            <div className="comment" id={id}>
                <div className="title-group">
                    <a href={`https://reddit.com/user/${author}`} className="author">{author}</a>
                    <span className="upvotes">{formatPoints(ups - downs)} points</span>
                    {" "}-{" "}
                    <span className="time-ago">{timeAgo}</span>
                    {!isDeleted && <span className="delete" onClick={() => deleteComment(id)}>X</span>}
                </div>
                <p className="comment-body">{body}</p>
            </div>
            <Comments comments={childComments} className="nested" />
        </>)
}

export default Comment