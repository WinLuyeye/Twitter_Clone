import React from 'react'


function Tweet({tweetr}){
  return(
    <div className="tweets">
        {tweetr.map((e) => (
          <div className="tweet" key={e.id}>
              <aside className="tweet-avatar">
                <img src={e.userProfil} alt="lecivgfd"/>
              </aside>
            <div className ="tweet-content">
              <div className='tweet-body'>
                <h2 className='tweet-title'>
                  <span className='tweet-title-author'>{e.userTweet}</span>
                  <img src={e.verifys} className='tweet-title-author'/>
                  <span className='tweet-title-details'>{e.mail}</span>
                  <span className='tweet-title-details'>{e.temps}</span>
                </h2>
                <p className='tweet-text'>{e.tweetContent}</p>
                <div className='tweet-image'>
                  <img src={e.tweetImage}/>
                </div>
              </div>
          
              <div className="tweet-actions">
                {e.iconAction.map((element, index) => (
                    <div key={index} className='tweet-action'>
                      <img src={element.tweetComment} />
                      <span>{element.numComment}</span>
                    </div>
                ))}
              </div>
            </div>
          </div>
        ) )}
    </div>
  )
}

export default Tweet