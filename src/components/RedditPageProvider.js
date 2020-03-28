import React, { useState, useEffect, useContext, createContext } from 'react';

const REDDIT_URL = 'https://gist.githubusercontent.com/mkg0/6a4dca9067ad7a296204e7c9ecd977b0/raw/0b1ec16580ea1e970a73f5c85563c22631be7ad7/unpopularopinion-dataset.json'

export const RedditPageContext = createContext([]);

export const useRedditPage = () => useContext(RedditPageContext);


const RedditPageProvider = ({ children }) => {
    const [comments, setComments] = useState([])
    const [page, setPage] = useState([])


    const deleteComment = (oldCommentId) => setComments(comments.map(comment => {
        if (comment.id === oldCommentId)
            return { ...comment, author: "[deleted]", body: "[removed]", isDeleted: true, created_utc: new Date().getTime() }

        return comment;
    }))

    useEffect(() => {
        async function fetchPage() {
            const result = await fetch(REDDIT_URL);
            const data = await result.json()
            const { comments, ...page } = data;
            setComments(comments);
            setPage(page)
        }

        fetchPage()
    }, [])

    return <RedditPageContext.Provider value={{ page, comments, deleteComment }}>{children}</RedditPageContext.Provider>
}


export default RedditPageProvider