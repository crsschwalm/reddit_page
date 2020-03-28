import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { useRedditPage } from './components/RedditPageProvider';

function App() {
  const { comments, page } = useRedditPage();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {JSON.stringify(page)}
        </p>
        <p>
          {JSON.stringify(comments)}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
