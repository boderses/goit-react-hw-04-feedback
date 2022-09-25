import PropTypes from 'prop-types';
import { StatisticsBlock } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticsBlock>
      <p>
        Good: <span>{good}</span>
      </p>
      <p>
        Neutral: <span>{neutral}</span>
      </p>
      <p>
        Bad: <span>{bad}</span>
      </p>

      <p>
        Total: <span>{total}</span>
      </p>
      <p>
        Positive feedbacks: <span>{positivePercentage}%</span>
      </p>
    </StatisticsBlock>
  );
};

export default Statistics;
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};