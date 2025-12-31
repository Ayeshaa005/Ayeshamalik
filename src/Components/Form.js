import { toast } from 'react-toastify';
import './Form.css';

import React from 'react'

const Form = () => {


const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "39921034-628a-4133-9d2a-fec7857db84c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };




  return (
    <div className='form'>

        <form onSubmit={onSubmit}>


            <label>Your Name</label>
            <input type="text" name='name'></input>



            <label>E-mail</label>
            <input type="email" name="email"></input>


            <label>Subject</label>
            <input name='subject' type="text"></input>


            <label>Message</label>
            <textarea name="message" rows="6" placeholder='Type Your Message Here'></textarea>


            <button onClick={()=>{toast.success("Submitted Successfully")}} className='btn'>Submit</button>

        </form>

      
    </div>
  )
}

export default Form
