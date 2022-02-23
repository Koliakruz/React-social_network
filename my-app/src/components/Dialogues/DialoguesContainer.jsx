import { addMessageCreator } from '../../redux/messages-reducer';
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
    addMessage: (newMessageText) => {
      dispatch(addMessageCreator(newMessageText));
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthNavigate)
  (Dialogues); 