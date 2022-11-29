import React, { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification'

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const onLeaveFeedback = (event) => {
    const tagBtn = event.target.value;
    switch (tagBtn) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return parseInt(total ? 100 / total * good : 0);
  };


  const positiveFeedback = countPositiveFeedbackPercentage();
  const total = countTotalFeedback();

  return (<div>
    <Section title="Please leave feedback">
      <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={onLeaveFeedback} />
      {total ? <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positiveFeedback} />
        : <Notification message="There is no feedback" />
      }
    </Section>
  </div >);
}

export { App };