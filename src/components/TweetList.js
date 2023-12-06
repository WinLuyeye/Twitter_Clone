import profilephoto from '../images/cnn.png'
import profilephoto1 from '../images/nyt.png'
import profilephoto2 from '../images/twitter.png'
import verifys from '../images/verify.png'
import ver from '../images/tweetimage.png'
import comment from '../images/comment.png'
import retweet from '../images/retweet.png'
import like from '../images/like.png'
import share from '../images/Share.png'

export const tab = [
  {
    id : '1',
    userProfil : profilephoto,
    userTweet : 'CNN',
    verify : verifys,
    mail : '@CNN .',
    temps : "7min",
    tweetContent : 'President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.',
    tweetImage : null,
    iconAction : [
      {
        tweetComment : comment,
        numComment : 57
      },
      {
        tweetComment : retweet,
        numComment : 144
      },
      {
        tweetComment : like,
        numComment : 182
      },
      {
        tweetComment : share,

      }
    ]
  },
  {
    id : '2',
    userProfil : profilephoto1,
    userTweet : 'The New York Times',
    verify : verifys,
    mail: '@nytimes .',
    temps : "2h",
    tweetContent : 'Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land',
    tweetImage : ver,
    iconAction : [
      {
        tweetComment : comment,
        numComment : 19
      },
      {
        tweetComment : retweet,
        numComment : 48
      },
      {
        tweetComment : like,
        numComment : 482
      },
      {
        tweetComment : share,
        
      }
    ]
    
  },
  {
    id : '3',
    userProfil : profilephoto2,
    userTweet : 'Twitter',
    verify : verifys,
    mail : '@twitter .',
    temps : "Oct 29",
    tweetContent : "BIG NEWS lol jk still Twitter",
    tweetImage : null,
    iconAction : [
      {
        tweetComment : comment,
        numComment : "64K"
      },
      {
        tweetComment : retweet,
        numComment : "36.6K"
      },
      {
        tweetComment : like,
        numComment : "267.1K"
      },
      {
        tweetComment : share,

      }
    ]
  },
  {
    id : '3',
    userProfil : profilephoto2,
    userTweet : 'Twitter',
    verify : verifys,
    mail : '@twitter .',
    temps : "Oct 4",
    tweetContent : "hello literally everyone",
    tweetImage : null,
    iconAction : [
      {
        tweetComment : comment,
        numComment : "118.7K"
      },
      {
        tweetComment : retweet,
        numComment : "785.4K"
      },
      {
        tweetComment : like,
        numComment : "3.3M"
      },
      {
        tweetComment : share,

      }
    ]
  },
  
]