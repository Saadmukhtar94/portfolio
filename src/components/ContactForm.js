// import React from "react";
// export default function Contact() {
//     return (
   
// <div className="container" id='contact'>
// <div className="form-container container w-50" >
//     <form className="form"
//     action='https://formspree.io/f/xyzwkagj'
//     method="post">
//         <span className="heading">Get in touch</span>
//         <input placeholder="Name" type="text" className="input"/>
//         <input placeholder="Email" id="mail" type="email" className="input"/>
//         <textarea placeholder="Say Hello" rows="10" cols="30" id="message" name="message" className="textarea"></textarea>
//         <div className="button-container">
//         <div className="send-button">Send</div>
//         <div className="reset-button-container">
//             <div id="reset-btn" className="reset-button">Reset</div>
//         </div>
//         </div>
//     </form>
// </div>
// </div>
// // </div>



//     );
//   }
'use client'
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xyzwkagj");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <div id="contact" className='mt-5 '>
 <form onSubmit={handleSubmit} className=' form form-container container py-5  d-flex justify-content-center align-items-center flex-column gap-3' id='contactForm' >
               <span className="heading fs-1">Get in touch</span>

      <label htmlFor="email" className='text-light fs-4'>
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        className='input bg-secondary bg-opacity-25'
        required
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      
         <textarea placeholder="  Type Your Queries"  id="message" name="message" className="textarea   bg-secondary bg-opacity-25 "  required></textarea>

      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <div className="button-container">
      <button type="submit" disabled={state.submitting} className='send-button' id='submit-btn'>
        Submit
      </button>
      </div>
      
    </form>
    </div>
   
  );
}

function App() {
  return (
    <ContactForm />
  );
}

export default App;