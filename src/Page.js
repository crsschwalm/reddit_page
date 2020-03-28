import React from 'react';
import './styles/comments.scss';
import './styles/page.scss'
import { useRedditPage } from './components/RedditPageProvider';
import PostBody from './components/PostBody';
import PostHead from './components/PostHead';
import Comments from './components/Comments';

function Page() {
  const { comments, page } = useRedditPage();
  const topLevelComments = comments.filter(({ parent_id }) => !parent_id);
  return (
    <div className="body">
      <PostHead subreddit={page.subreddit_name_prefixed} title={page.title} upvoteCount={page.ups} />
      <div className="post-container">
        <section className="post-body">
          <PostBody bodyHTML={page.selftext_html} commentCount={comments.length} />
        </section>
        <section className="comments-section">
          <Comments comments={topLevelComments} />
        </section>
      </div>
    </div>
  );
}

export default Page;
