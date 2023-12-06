import React from 'react'
import profilephoto from '../images/profilephoto.png'
import medias from '../images/medias.svg'
import gif from '../images/gif.svg'
import questions from '../images/questions.svg'
import emojis from '../images/emojis.svg'
import program from '../images/program.svg'
import tweet from '../images/tweet.svg'

function TweetEditor({tweetr}){
  return(
    <div className="tweet-editor">
      <img src={profilephoto} alt="profil photo" className="avantar"/>
      <div className="tweet-editor-form">
        <input type="text" placeholder="What's happening" className="tweet-editor-input"/>
        <div className="tweet-editor-buttons">
          <div className="tweet-editor-actions">
            <img src={medias} alt="medias"/>
            <img src={gif} alt="gif"/>
            <img src={questions} alt="questions"/>
            <img src={emojis} alt="emojis"/>
            <img src={program} alt="program"/>
          </div>
          <div className="buttons">
            <img src={tweet} alt="tweet"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TweetEditor