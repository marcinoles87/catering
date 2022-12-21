import React from 'react' ;

import '../components/contact.css'


class Contact extends React.Component {
    state = {  } 
    render() { 
        return (
            <div className='contact-wrapper'>
                
                <div className='contact-link'>

                </div>


                <div className='contact-form'>
                    <form>
                        <label>Name</label>
                        <input className='contact-input-name' type='text'></input>

                        <label>Email</label>
                        <input className='contact-input-email'></input>

                        <label className='contact-input-adress'>Adress</label>
                        <input></input>
                        
                        <label>Your message</label>
                        <textarea ></textarea>

                        <input type='submit'></input>
                        
                    </form>
                </div>

            </div>
        );
    }
}
 
export default Contact;