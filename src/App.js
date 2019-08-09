import React, { useState } from 'react';

function App() {

  // componentDidMount() {
  //   fetch('http://localhost:3001/counts/1')
  //     .then(res => res.json())
  //     .then((result) => {
  //       this.setState({
  //         count: result.count
  //       })
  //     })
  // }

  let [ counter, updateCounter] = useState(0)
  return (
    <div>
      <h1 onClick={() => {
        updateCounter(++counter)
      }}>
        {counter}
      </h1>
    </div>
  );
}

export default App;
