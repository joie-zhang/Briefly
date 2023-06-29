import React, { useState } from 'react';

// input field for article URL
const App = () => {
  const [summary, setSummary] = useState('No summary generated yet');

  return (
    <div>
      <h3>Summarize an article</h3>
      <div>
        <p>Insert the article URL here: </p>
        <PostInputField />
      </div>
      <h3>Retrieve a previous article summary</h3>
      <div>
        <p>Insert the article URL here: </p>
        <GetInputField />
      </div>
    </div>
  );
}

const PostInputField = () => {
  return (
    <div>
      <form method="POST" action='/api/'>
        <input name="url" type="text" placeholder="url" />
        <input type='submit' value="api" />
      </form>
    </div>
  );
}

// handleClick function: POST request
// button for submitting the POST request
// box for displaying the summary

// input field for article URL
// handleClick function: GET request
// button for submitting the GET request
// box for displaying the summary

const GetInputField = () => {
  return (
    <div>
      <form method="GET" action='/database/'>
        <input name="url" type="text" placeholder="url" />
        <input type='submit' value="search" />
      </form>
    </div>
  );
}

export default App;