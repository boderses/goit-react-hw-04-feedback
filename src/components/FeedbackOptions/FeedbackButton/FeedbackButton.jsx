import PropTypes from 'prop-types';
import { Button } from './FeedbackButton.styled';

const FeedbackButton = ({ option, onLeaveFeedback }) => {
  return (
    <Button type="button" onClick={() => onLeaveFeedback({ option })}>
      {option}
    </Button>
  );
};

export default FeedbackButton;
FeedbackButton.propTypes = {
  option: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func,
};