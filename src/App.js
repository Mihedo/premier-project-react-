import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Tweet } from "./Tweet";

const DEFAULT_TWEET = [];

function App() {
  const [tweets, setTweets] = useState(DEFAULT_TWEET);

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.username.value;
    const content = event.target.contents.value;

    const newTweet = {
      id: uuidv4(),
      name,
      content,
      like: 0,
    };

    setTweets([...tweets, newTweet]);
    event.target.reset();
  };

  const onDelete = (tweetId) => {
    setTweets((curr) => curr.filter((tweet) => tweet.id !== tweetId));
  };

  return (
    <div className="tweet-send">
      <form onSubmit={handleSubmit} className="tweet-form">
        <h4>New Tweet </h4>
        <input placeholder="Pseudo :" type="text" name="username" />
        <input placeholder="What's happening?" type="text" name="contents" />
        <button className="tweetBtn" type="submit">
          Tweet
        </button>
      </form>

      <div className="tweet-container">
        {tweets.map((tweet) => (
          <Tweet
            key={tweet.id}
            id={tweet.id}
            name={tweet.name}
            content={tweet.content}
            like={tweet.like}
            onDelete={(tweetId) => onDelete(tweetId)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
