import React from 'react';
import Header from '../components/header.jsx';
import TweetEditor from '../components/tweet-editor.jsx'
import Tweet from '../components/tweet.jsx'
import {tab} from '../components/TweetList.js'

function Home() {
  return (
    <main className="timeline">
      <Header />
      <TweetEditor />
      <Tweet tweetr={tab}/>
    </main>
  );
}

export default Home;