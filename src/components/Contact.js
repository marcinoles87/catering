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
        incorrect : true ,

     }

    

     handleOnChange = (e) =>{
        
        const value = e.target.value
        const type = e.target.type
        const claName = e.target.className
        const name = e.target.name
       
        console.log(value)
        console.log(type)
        console.log(claName)
        console.log(name)

        const incorrect = this.messageError.incorrect
       

        if(this.state.value > 2 ){
            this.setState({
                incorrect : !incorrect ,
             })
        }

    }



     formValidation = () => {
        let user = false ;
        let adress = false ;
        let email = false ;
        let correct = false ;

      
        if(this.state.name.length > 2){
            user = true;
            
        }

        if(this.state.email.length > 1 ) {
            email = true;
        }

        if(this.state.adress.length > 2 ){
            adress = true;
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
        
        const validation = this.formValidation();

        if(validation.correct) {
            console.log('dziala');
            this.setState({
                name: '' ,
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
                        name ='name'
                        type='text'
                        value={this.state.value} 
                        onChange={this.handleOnChange}>

                        </input>
                        {this.messageError.incorrect ? 'tekst jest za krotki' :  ''} 
                        </label>
                        
                        </div>

                        <div className='name'>
                        <label htmlFor='email'>Email
                        <input className='contact-input'
                        name = 'mail' 
                        type='email'
                        value={this.state.value} 
                        onChange={this.handleOnChange}>

                        </input>{this.messageError.emailValue} 
                       </label></div>

                        <div className='name'>
                        <label htmlFor='adress' >Adress
                        <input className='contact-input'
                        name ='adress'
                        type='adress'
                        value={this.state.value} 
                        onChange={this.handleOnChange}></input>{this.messageError.adressValue} 
                        </label></div>

                        <div className='name'>
                        <label htmlFor='message'>Your message
                        <textarea className='contact-input'
                        name='message'
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