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
                        <input></input>

                        <label>Email</label>
                        <input></input>

                        <label>Adress</label>
                        <input></input>

                        <textarea></textarea>
                    </form>
                </div>

            </div>
        );
    }
}
 
export default Contact;