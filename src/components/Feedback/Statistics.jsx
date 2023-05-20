import { Notification } from './Notification';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return total() === 0 ? (
    <Notification message="There is no feedback" />
  ) : (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total()}</p>
      <p>Positive feedback: {positivePercentage()}%</p>
    </>
  );
};
