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
                    <form className='form'>

                        <div className='name'>
                        <label>Name</label>
                        <input className='contact-input-name' type='text'></input>
                        </div>

                        <div className='name'>
                        <label>Email</label>
                        <input className='contact-input-email'></input>
                        </div>

                        <div className='name'>
                        <label className='contact-input-adress'>Adress</label>
                        <input></input>
                        </div>

                        <div className='name'>
                        <label>Your message</label>
                        <textarea ></textarea>
                        </div>

                        <div className='name'>
                        <input type='submit'></input>
                        </div>
                        
                    </form>
                </div>

            </div>
        );
    }
}
 
export default Contact;