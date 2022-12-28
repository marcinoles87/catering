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

     messageError = {
        textValue : 'Nazwa musi być dluższa ' ,
        emailValue : 'Nazwa musi zawierac @ ' ,
        adressValue : 'Adres musi byc dluższy' ,

     }

    

     handleOnChange = (e) =>{
        
        const value = e.target.value
        const type = e.target.type
        const claName = e.target.className
       
        console.log(value)
        console.log(type)
        console.log(claName)

        
           
        if(value.length > 2 && this.state.name.indexOf(' ')) {
           console.log('potwierdziam')
            this.setState({
             textValue : 'jest ok',
             
            })

        }

    }

        
        
     

     

     

     formValidation = (e) => {
        e.preventDefault() 

        const validation = this.formValidation() ;
        console.log(validation)

        
 
            
         }
        
     

     handleOnSubmit = (e) => { 
        
        e.preventDefault();
        console.log('dziala');
        const validation = this.formValidation();
        console.log(validation)
       

        

     }
    

    render() { 
        return (
            <div className='contact-wrapper'>
                
                <div className='contact-link'>
               
                    

                </div>


                <div className='contact-form'>
                    <form className='form' onSubmit={this.handleOnSubmit}>

                        <div className='name'>
                        <label htmlFor='name'>Name
                        <input 
                        className='contact-input' 
                        type='text'
                        value={this.state.value} 
                        onChange={this.handleOnChange}>

                        </input>
                        {this.messageError.textValue} 
                        </label>
                        
                        </div>

                        <div className='name'>
                        <label htmlFor='email'>Email
                        <input className='contact-input' 
                        type='email'
                        value={this.state.value} 
                        onChange={this.handleOnChange}>

                        </input>{this.messageError.emailValue} 
                       </label></div>

                        <div className='name'>
                        <label htmlFor='adress' >Adress
                        <input className='contact-input'
                        type='adress'
                        value={this.state.value} 
                        onChange={this.handleOnChange}></input>{this.messageError.adressValue} 
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