import React  from 'react' ;
import { useState } from 'react';


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
        const type = e.target.type
        const claName = e.target.className
       
        console.log(value)
        console.log(type)
        console.log(claName)
        

        this.setState({
            
            name:value

        })

        if(value.length < 2) {
           
           console.log('za krotka nazwa')
           this.setState({
            message : 'za krotka nazwa'
           })

           if(value.length > 2) {
            this.setState({
                message: ''
            })
           }
           
        }
        
     }

     formValidation = (e) => {
        console.log('dziala')
        
     }

     handleOnSubmit = (e) => { 
        
        e.preventDefault();
        console.log('dziala');
        const validation = this.formValidation;
       

        

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

                        </input>{this.state.message}
                        </label>
                        </div>

                        <div className='name'>
                        <label htmlFor='email'>Email
                        <input className='contact-input' 
                        type='email'
                        value={this.state.value} 
                        onChange={this.handleOnChange}>

                        </input>
                       </label></div>

                        <div className='name'>
                        <label htmlFor='adress' >Adress
                        <input className='contact-input'
                        type='adress'
                        value={this.state.value} 
                        onChange={this.handleOnChange}></input>
                        </label></div>

                        <div className='name'>
                        <label htmlFor='message'>Your message
                        <textarea className='contact-input'
                        type='text' 
                        value={this.state.value} 
                        onChange={this.handleOnChange}></textarea>
                        </label></div>

                        <div className='name'>
                        <input type='submit'
                        onSubmit={this.handleOnSubmit}></input>
                        </div>
                        
                    </form>
                </div>

                

            </div>
        );
    }
}
 
export default Contact;