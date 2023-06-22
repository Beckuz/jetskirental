import React from 'react';
import {StyledForm, StyledInput, StyledButton, StyledAlert, StyledLabel, StyledTextArea} from './formElements';

function ContactForm(){
    const [email, setEmail] = React.useState('');
    const [emailInvalid, setEmailInvalid] = React.useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();

          if (!email) {
            setEmailInvalid(true)
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            setEmailInvalid(true)
          }
          else {
              setEmailInvalid(false)
          }

    }

     const emailEntered = (e) => {
        setEmail(e.target.value);
        // buttonEnabled(username, password)
    }

return (
        <StyledForm onSubmit={handleSubmit}>
            <StyledLabel>Name:</StyledLabel>
            <StyledInput type="text" placeholder="Name"/>
            <StyledLabel invalid={emailInvalid}>E-mail:</StyledLabel>
            <StyledInput type="email" value={email} onChange={(e) => emailEntered(e)} placeholder="example@example.com" />
            {emailInvalid && <StyledAlert>Invalid E-mail format.</StyledAlert>}
            <StyledLabel>Message:</StyledLabel>
            <StyledTextArea type="text" placeholder="Write your message here"/>
            <StyledButton type="submit" >Send</StyledButton>
        </StyledForm>
    )
}

export default ContactForm;