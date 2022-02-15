import { addMessageCreator, updateMessageCreator } from '../../redux/messages-reducer';
import Dialogues from './Dialogues';
import { connect } from 'react-redux';
import { withAuthNavigate } from '../../hoc/withAuthNavigate';
import { compose } from 'redux';

let mapStateToProps = (state) => {
  return{
    messagePage: state.messagePage,
  }

}

let mapDispatchToProps = (dispatch) => {
  return{
    updateMessageBody: (newMessage) => {
      dispatch(updateMessageCreator(newMessage));
    },
    addMessage: () => {
      dispatch(addMessageCreator());
    }

  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthNavigate)
  (Dialogues); 