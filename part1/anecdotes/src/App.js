import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));
  const [most, setMost] = useState(0);

  console.log(points);

  const handleVote = () => {
    const copy = [...points];
    // increment the value in position 2 by one
    copy[selected] += 1;
    setPoints(copy);
    setMost(copy.indexOf(Math.max(...copy)));
  };

  const handleAnegdota = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  return (
    <div>
      <h1>Anocdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {points[selected]} votes</div>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleAnegdota}>next anecdote</button>
      <h1>Anocdote with most votes</h1>
      <div>{anecdotes[most]}</div>
      <div>has {points[most]} votes</div>
      {most}
    </div>
  );
};

export default App;
