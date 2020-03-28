import React from 'react';

const PostBody = ({ commentCount, bodyHTML }) => {
    const normalizedBody = () => ({ __html: bodyHTML })

    return (
        <>
            <div dangerouslySetInnerHTML={normalizedBody()} />
            <div className="comment-reference">[--] {commentCount}</div>
        </>
    )
}

export default PostBody