import React from 'react';
import decodeHTMLEntities from '../services/decode-html-entities';
import commentImg from '../assets/comment.png'

const PostBody = ({ commentCount, bodyHTML }) => {
    const normalizedBody = () => ({ __html: decodeHTMLEntities(bodyHTML) })

    return (
        <>
            <div dangerouslySetInnerHTML={normalizedBody()} />
            <div className="comment-reference"><img className="icon" src={commentImg} /> {commentCount}</div>
        </>
    )
}

export default PostBody