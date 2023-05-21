import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return <>
    {Object.keys(options).map(feedback => (
      <button key={feedback} type="button" onClick={onLeaveFeedback}>
        {feedback}
      </button>
    ))}
  </>
};


FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};