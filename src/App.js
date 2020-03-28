import React from 'react';
import './App.scss';
import { useRedditPage } from './components/RedditPageProvider';
import PostBody from './components/PostBody';
import PostHead from './components/PostHead';
import Comments from './components/Comments';

function App() {
  const { comments, page } = useRedditPage();
  console.log("comments", comments)
  console.log("page", page)

  return (
    <div className="body">
      <PostHead subreddit={page.subreddit_name_prefixed} title={page.title} upvoteCount={page.ups} />
      <PostBody bodyHTML={page.selftext_html} commentCount={comments.length} />
      <section className="comments-section">
        <Comments comments={comments} />
      </section>
    </div>
  );
}

export default App;
