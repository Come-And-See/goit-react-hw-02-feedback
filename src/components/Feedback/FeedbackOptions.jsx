export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return Object.keys(options).map(feedback => (
    <button key={feedback} type="button" onClick={onLeaveFeedback}>
      {feedback}
    </button>
  ));
};
