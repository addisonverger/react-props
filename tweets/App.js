// Render the tweets using React!
const App = (props) => {
    let { tweets } = props;
    return (
      <div className="d-flex flex-column justify-content-start align-items-center mt-5">
          <Tweet TweetInfoArray={props} />
      </div>
    )
}

// CHALLENGE: Write a separate Tweet component for use in the App component

const Tweet = (props) => {
  console.log(props.TweetInfoArray)
  return (
    props.TweetInfoArray.tweets.map((tweet, index) => {
      return (
        <div key={index} className="bg-white p-2 m-2 w-50">
          <User profilePic={tweet.user.profilePic}
          username={tweet.user.username}
          verified={tweet.user.isVerified}
          handle={tweet.user.handle}
          />

          <h3>{tweet.text}</h3>
          <hr />
          <Metrics replies={tweet.replies}
          retweets={tweet.retweets}
          likes={tweet.likes} />

      </div>
      )
    })
  )
}

// CHALLENGE: Write a separate User component for use in the Tweet component

const User = (props) => {
  return (
    <div className="d-flex align-items-center">
      <img width="50" src={props.profilePic} />
      <div className="mt-4 ml-2">
        <b>{props.username}</b>
        {props.verified ? <img width="15" src="twitterIcons/check-circle.svg" /> : ''}
        <p>{props.handle}</p>
      </div>
    </div>
  )
}

// CHALLENGE: Write a separate Metrics component for use in the Tweet component (likes, retweets, replies)

const Metrics = (props) => {
  return (
    <div className="d-flex text-secondary">
      <img style={{opacity: "0.62"}} src="twitterIcons/message-circle.svg" />
      <b className="mr-3 ml-1">{props.replies}</b>
      <img style={{opacity: "0.62"}} src="twitterIcons/repeat.svg" />
      <b className="mr-3 ml-1">{props.retweets}</b>
      <img style={{opacity: "0.62"}} src="twitterIcons/heart.svg" />
      <b className="mr-3 ml-1">{props.likes}</b>
    </div>
  )
};

// BONUS CHALLENGE - Delete your Tweet component code and rewrite the App component so that it uses User and Metrics directly
