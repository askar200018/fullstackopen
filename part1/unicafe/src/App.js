import { useState } from 'react';

const Statistics = ({ good, neutral, bad }) => {
  const sumOfAllFeedbacks = () => {
    return good + neutral + bad;
  };

  const getAverageFeedback = () => {
    const sumOfAll = sumOfAllFeedbacks();
    if (sumOfAll === 0) {
      return 0;
    }
    return (good * 1 + neutral * 0 + bad * -1) / sumOfAll;
  };

  const getPercentageOfPositiveFeedback = () => {
    const sumOfAll = sumOfAllFeedbacks();
    if (sumOfAll === 0) {
      return 0;
    }
    return (good * 100) / sumOfAll;
  };

  return (
    <div>
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {sumOfAllFeedbacks()}</p>
      <p>average {getAverageFeedback()}</p>
      <p>positive {getPercentageOfPositiveFeedback()}%</p>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <div>
        <h2>give feedback</h2>
        <button onClick={() => setGood(good + 1)}>good</button>
        <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
        <button onClick={() => setBad(bad + 1)}>bad</button>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
