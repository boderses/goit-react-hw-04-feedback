import PropTypes from 'prop-types';
import { SectionBlock, Title } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionBlock>
      <Title> {title}</Title>
      {children}
    </SectionBlock>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string,
};