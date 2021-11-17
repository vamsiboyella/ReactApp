import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { save } from '../service/userService';

const CreateUser =  () => {
 
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState(false);
    const [validForm, setValidForm] =useState(false);

    const history = useHistory();
    const handleFirstNameChange = (event) => {
        event.preventDefault();
        setFirstName(event.target.value);
    }
    const handleLastNameChange = (event) => {
        event.preventDefault();
        setLastName(event.target.value);
    }
    const handleEmailChange = (event) => {       
        event.preventDefault();
        let text = event.target.value;
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(text) === false) {
          console.log("Email is Not Correct");   
          //highlighting the inputbox and preventing submit can be done
          //setValidForm(false);

          setEmail(text);      
          return false;
        }
        else {
         //setValidForm(true);
          setEmail(text);
          console.log("Email is Correct");
        }
       
    }
    const handleStatusChange = (event) => {
        event.preventDefault();      
        setStatus(!status);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        //if(validForm) 
        // Will be proceeding further
        await save({firstName, lastName, email, status});     
    
        history.push('/index');   
    }
 
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Add User</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>First Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder={"First Name"}                     
                      onChange={handleFirstNameChange}
                      />
                </div>
                <div className="form-group">
                    <label>Last Name: </label>
                    <input type="text" 
                      className="form-control"
                      placeholder={"Last Name"}                     
                      onChange={handleLastNameChange}
                      />
                </div>
                <div className="form-group">
                    <label>Email: </label>
                    <input type="email" 
                      className="form-control"
                      placeholder={"email"}                     
                      onChange={handleEmailChange}
                      />
                </div>
                <div className="form-group">
                <div className="form-check">
                    <label className="form-check-label">Status</label>
                    <input type="checkbox"                       
                      name ={'status'}  
                      checked={status}    
                      className="form-check-input"                                     
                      onChange={handleStatusChange}
                      />
                </div>
                </div>
                <div className="form-group" style={{ marginTop: 10 }}>
                    <input type="submit" 
                      value="Create" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    );
  
}
export default CreateUser;