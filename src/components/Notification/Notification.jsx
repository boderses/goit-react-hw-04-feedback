import PropTypes from 'prop-types';
import { NoteMessage } from './Notification.styled';

const Notification = ({ message }) => {
  return <NoteMessage>{message}</NoteMessage>;
};

export default Notification;
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};