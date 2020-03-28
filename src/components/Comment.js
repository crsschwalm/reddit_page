import React from 'react';
import deleteImg from '../assets/delete.png'

import formatPoints from '../services/format-points'
import formatDateDifference from '../services/format-date-difference'
import decodeHTMLEntities from '../services/decode-html-entities';

import Comments from './Comments'
import { useRedditPage } from './RedditPageProvider';

const Comment = ({ id, author, ups, downs, created_utc, isDeleted, body_html }) => {
    const { comments, deleteComment } = useRedditPage();
    const childComments = comments.filter(({ parent_id }) => parent_id === id);

    const normalizedBody = () => ({ __html: decodeHTMLEntities(body_html) })

    const commentLastEdit = new Date(created_utc * 1000)
    const timeAgo = formatDateDifference(commentLastEdit)

    return (
        <>
            <div className="comment" id={id}>
                <div className="title-group">
                    {
                        isDeleted ?
                            <a href="#" className="author deleted">{author}</a> :
                            <a href={`https://reddit.com/user/${author}`} className="author">{author}</a>
                    }
                    <span className="upvotes">{formatPoints(ups - downs)} points</span>
                    {" "}-{" "}
                    <span className="time-ago">{timeAgo}</span>
                    {
                        isDeleted ?
                            null :
                            <span className="delete" onClick={() => deleteComment(id)}>
                                <img className="icon" src={deleteImg} alt="delete"></img>
                            </span>
                    }
                </div>
                <div className="comment-body" dangerouslySetInnerHTML={normalizedBody()} />
            </div>
            <Comments comments={childComments} className="nested" />
        </>)
}

export default Comment