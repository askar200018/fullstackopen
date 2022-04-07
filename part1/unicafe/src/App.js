import { useState } from 'react';

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const StatisticLine = ({ text, value, sign = '' }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>
        {value} {sign}
      </td>
    </tr>
  );
};

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

  const isNoFeedbacks = () => {
    return good === 0 && neutral === 0 && bad === 0;
  };

  if (isNoFeedbacks()) {
    return <p>No feedback given</p>;
  }

  return (
    <div>
      <h2>statistics</h2>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={sumOfAllFeedbacks()} />
          <StatisticLine text="average" value={getAverageFeedback()} />
          <StatisticLine
            text="positive"
            value={getPercentageOfPositiveFeedback()}
            sign="%"
          />
        </tbody>
      </table>
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
        <Button onClick={() => setGood(good + 1)} text="good" />
        <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button onClick={() => setBad(bad + 1)} text="bad" />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
