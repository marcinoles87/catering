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

        

    }



     formValidation = () => {
        let user = false ;
        let adress = false ;
        let email = false ;
        let correct = false ;

        if(this.state.name.length > 2 && this.this.state.name.indexOf(' ')){
            user = true;
            
        }

        if(this.state.adress.length > 2 && this.this.state.adress.indexOf(' ')){
            adress = true;
        }

        if(this.state.email.indexOf('@') !== -1){
            email = true;
        }

        if(user && adress && email){
            correct = true;
        }

        
        
        return ({
            user ,
            adress ,
            email , 
            correct
        })

        
            
         }
        
     

     handleOnSubmit = (e) => { 


        
        e.preventDefault();
        console.log('dziala');
        const validation = this.formValidation();

        if(validation.correct) {
            this.setState({
                name:'' ,
                email:'',
                adress:'' ,
                message:'',
                
            })
        }
        
        
        

       


        

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