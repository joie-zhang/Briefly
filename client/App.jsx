import React, { useState } from 'react';

// input field for article URL
const App = () => {
  // const [summary, setSummary] = useState('No summary retrieved yet');

  return (
    <div>
      <h3>Summarize an article</h3>
      <div>
        <p>Insert your article URL here: </p>
        <PostInputField />
      </div>
      <div>
        <p>Or, insert both your URL and article body here for a more accurate summary: </p>
        <PostInputField2 />
      </div>
      <h3>Retrieve a previous article summary</h3>
      <div>
        <p>Insert your article URL here: </p>
        <GetInputField />
      </div>
    </div>
  );
}

const PostInputField = () => {
  return (
    <div>
      <form method="POST" action='/api/url/'>
        <input name="url" type="text" placeholder="URL" />
        <input type='submit' value="Search" />
      </form>
    </div>
  );
}

const PostInputField2 = () => {
  return (
    <div>
      <form method="POST" action='/api/text/'>
        <input name="url" type="text" placeholder="URL" />
        <input name="text" type="text" placeholder="Body" />
        <input type='submit' value="Search" />
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
        <input name="url" type="text" placeholder="URL" />
        <input type='submit' value="Search" />
      </form>
    </div>
  );
}

// const GetInputField = () => {
//   return (
//     <div>

//     </div>
//   );
// }

export default App;