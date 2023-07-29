import React from 'react';
import s from './MessageSender.module.css'
import {Field, reduxForm} from "redux-form";
import {Textarea} from "components/common/FormsConntrols/FormControls";
import {maxLengthCreator, required} from "validators/validators";

// type NewMessage = {
//     newMessageBody: string
// }
//
// type CombinedProps = MessageSenderType & InjectedFormProps<NewMessage, MessageSenderType>;
//
// const MessageSender: React.FC<CombinedProps> = (props) => {

const MessageSender: React.FC<any> = (props) => {

    const addNewMessage = (values: {newMessageBody?: string}  ) => {
        //console.log(values) - текст из поля которое ему сообщил redux form
        //alert(values.newMessageBody)
        props.addMyNewMessageUI(values.newMessageBody)
    }

    return <AddMessageFormRedux onSubmit={addNewMessage}/>
};

export default MessageSender;

const maxLengthCreator_50 = maxLengthCreator(50)

const MessageSenderRedux: React.FC<any> = (props) => {
    return (
        <form className={s.container} onSubmit={props.handleSubmit}>
            <Field component={Textarea}
                   validate={[required, maxLengthCreator_50]}
                   name={'newMessageBody'}
                   placeholder={'Enter your message'}
                   className={s.textareaS}/>
            <button className={s.btnS}>Send</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(MessageSenderRedux)



// return (
//             <form className={s.container} onSubmit={props.handleSubmit}>
//                 {/*<TextField ref={myNewMessage}*/}
// {/*           className={s.textareaS}*/}
// {/*           onChange={onMyNewMessageChange}*/}
// {/*           onKeyDown={onKeyDown}*/}
// {/*           value={props.myNewMessageText}*/}
// {/*           label='Enter your message'*/}
// {/*           variant="outlined"*/}
// {/*           multiline*/}
// {/*           maxRows={4}*/}
// {/*           sx={{w: '70%',}}*/}
// {/*           InputProps={{sx: {height: '8vh'}}}*/}
// {/*></TextField>*/}
// {/*<IconButton onClick={addMyNewMessageUI}*/}
// {/*            className={s.btnS}*/}
// {/*            size={'medium'}*/}
// {/*            color={'primary'}*/}
// {/*> <AddIcon/></IconButton>*/}
// // <Field component={'textarea'} name={'newMessageBody'} placeholder={'Enter your message'}/>
// // <button>Send</button>
// // </form>
// // );
