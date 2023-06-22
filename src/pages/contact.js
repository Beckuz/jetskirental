import React from 'react';
import ContactForm from "../components/forms/contactForm";

const Contact = () => {
  return (
    <div
      style={{
          display: 'flex',
          flexDirection: 'column',
          minWidth: '100vm',
          justifyContent: 'center'
      }}
    >

        <h1 style={{display: "flex", flexDirection:"column"}}>Contact us:</h1>
        <div style={{display:"flex",flexWrap:"wrap", flexDirection:"none", justifyContent:"center"}}>
            <div style={{fontWeight: "bolder", maxHeight:"15vmax"}} className={"content-wrapper-double"}>
                <p>Phone: 050-00 00 000</p>
                <p>E-mail: jetskirent@gmail.com</p>
            </div>
            <ContactForm/>
        </div>
    </div>
  );
};

export default Contact;