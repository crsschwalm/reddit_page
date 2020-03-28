import React from 'react';

const PostBody = ({ commentCount, bodyHTML }) => {
    const normalizedBody = () => ({ __html: bodyHTML })

    return (
        <section className="post-body">
            <p dangerouslySetInnerHTML={normalizedBody()} />
            <div className="comment-reference">[--] {commentCount}</div>
        </section>
    )
}

export default PostBody