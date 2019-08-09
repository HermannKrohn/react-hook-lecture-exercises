import React, { useState, useEffect } from 'react';

function useCounter(url, initialState){
  let [ counter, updateCounter] = useState(initialState)
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then((result) => {
        updateCounter(result.count)
      })
  }, [])

  function updateCounterValue(newValue){
    updateCounter(newValue)
    fetch(url, {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ count: newValue })
    })
  }

  return [counter, updateCounterValue]
}

function App() {

  let [ counter, updateCounter] = useCounter('http://localhost:3001/counts/1', 0)

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
