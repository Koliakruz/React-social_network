import classes from './../Dialogues.module.css'


const Message = (props) => {
  return (
    <div className={classes.dialog}>
      <div>{props.message} </div>
    </div>
  )
}


export default Message;