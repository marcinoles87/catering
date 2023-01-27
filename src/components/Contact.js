import React  from 'react' ;
import { useState } from 'react';
import logo1 from '../img/tripLogo.png'
import logo2 from '../img/facebookLogo.png'
import logo3 from '../img/instagramLogo.png'




import '../components/contact.css'


class Contact extends React.Component {

    

    state = { 
        name:'' ,
        email:'',
        adress:'' ,
        message:'',
        name_incorrect:true ,
        email_incorrect:true ,
        adress_incorrect:true ,
        message_incorrect:true , 

     } 

     messageError = {
        textValue : 'Nazwa musi być dluższa ' ,
        emailValue : 'Nazwa musi zawierac @ ' ,
        adressValue : 'Adres musi byc dluższy' ,
        

     }

    

     handleOnChange = (e) =>{
        
        const value = e.target.value
        let valueLength = value.length
        let name = e.target.name

       
        if(name === 'name'){
        if(valueLength > 2 ){
            this.setState({
                name_incorrect:false
               
             })

             
        }}

        if(name === 'mail'){
            if(valueLength > 2 ){
                this.setState({
                    email_incorrect:false
                   
                 })
    
                 
            }}

            if(name === 'adress'){
                if(valueLength > 2 ){
                    this.setState({
                        adress_incorrect:false
                       
                     })
        
                     
                }}

                if(name === 'message'){
                    if(valueLength > 2 ){
                        this.setState({
                            message_incorrect:false,
                            message:value
                           
                         })
            
                         
                    }}

       

    }



     formValidation = () => {
        let user = false ;
        let adress = false ;
        let email = false ;
        let correct = false ;

      
        if(this.state.name.length > 2){
            user = true;
            
        }

        if(this.state.email.length > 1 && this.state.email.indexOf('@') !== -1) {
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
               
                   <h1>Check Us On and follow:</h1>

                    <a href='/'><img className='imgLink' src={logo1} alt='tripadvisor' ></img></a>
                    <a href='/'><img className='imgLink' src={logo2} alt='facebooklogo'></img></a>
                    <a href='/'><img className='imgLink' src={logo3} alt='instagram'></img></a>



                    <div className='link_logo'></div>

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

                        </input><span>
                        {this.state.name_incorrect ? 'imie jest za krotkie' :  'jest ok'}</span> 
                        </label>
                        
                        </div>

                        <div className='name'>
                        <label htmlFor='email'>Email
                        <input className='contact-input'
                        name = 'mail' 
                        type='email'
                        value={this.state.value} 
                        onChange={this.handleOnChange}>

                        </input><span>
                        {this.state.email_incorrect ? 'mail jest za krotkie' :  'jest ok'} </span>
                       </label></div>

                        <div className='name'>
                        <label htmlFor='adress' >Adress
                        <input className='contact-input'
                        name ='adress'
                        type='adress'
                        value={this.state.value} 
                        onChange={this.handleOnChange}></input><span>
                        {this.state.adress_incorrect ? 'adres jest za krotki' :  'jest ok'}</span>  
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