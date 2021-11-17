import React, { useState } from 'react';
import { save } from '../service/userService';

const CreateUser =  ({refreshData}) => {
 
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');

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
        setEmail(event.target.value);
    }
    const handleStatusChange = (event) => {
        event.preventDefault();
        setStatus(event.target.value);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        await save({firstName, lastName, email, status});       
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
                    <label>Status: </label>
                    <input type="text" 
                      className="form-control"
                      name ={'status'}                    
                      onChange={handleStatusChange}
                      />
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