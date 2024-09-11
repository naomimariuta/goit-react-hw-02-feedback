import React, {Component} from "react";
import styles from './App.module.css';
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Section from "./Section/Section";
import Notification from "./Notification";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

   handleIncrement = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  render() {
    const {good, neutral, bad} = this.state;
    const totalFeedback = good + neutral + bad;
    const positiveFeedbackPecentage = totalFeedback > 0 ? Math.round((good/totalFeedback) * 100) : 0;

    return (
      <div className={styles.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.handleIncrement}></FeedbackOptions>
        </Section>

        <Section title="Statistics:">
          {totalFeedback === 0 ? (<Notification message="There is no feedback ^_^"/>) : (
            <Statistics good={good} neutral={neutral} bad={bad} total={totalFeedback} positivePercentage={positiveFeedbackPecentage} />
          )}
        </Section>
      </div>
    );
  }
}

export default App;