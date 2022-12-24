import React from 'react' ;

import '../components/contact.css'


class Contact extends React.Component {

    

    state = { 
        name:'' ,
        email:'',
        adress:'' ,
        message:'',


     } 

    

     handleOnChange = (e) =>{
        const value = e.target.value
        
     }


    render() { 
        return (
            <div className='contact-wrapper'>
                
                <div className='contact-link'>

                    

                </div>


                <div className='contact-form'>
                    <form className='form'>

                        <div className='name'>
                        <label htmlFor='name'>Name
                        <input 
                        className='contact-input' 
                        type='text'
                        value={this.state.value} 
                        onChange={this.handleOnChange}>

                        </input>
                        </label>
                        </div>

                        <div className='name'>
                        <label htmlFor='email'>Email
                        <input className='contact-input'></input>
                       </label></div>

                        <div className='name'>
                        <label htmlFor='adress' >Adress
                        <input className='contact-input'></input>
                        </label></div>

                        <div className='name'>
                        <label htmlFor='message'>Your message
                        <textarea className='contact-input' ></textarea>
                        </label></div>

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