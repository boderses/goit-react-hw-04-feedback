import PropTypes from 'prop-types';
import { ButtonsBlock } from './FeedbackOptions.styled';
import FeedbackButton from './FeedbackButton/FeedbackButton';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonsBlock>
      {options.map(option => {
        return (
          <FeedbackButton
            key={option}
            option={option}
            onLeaveFeedback={onLeaveFeedback}
          />
        );
      })}
    </ButtonsBlock>
  );
};

export default FeedbackOptions;
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func,
};