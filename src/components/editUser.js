import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { update,getUser } from '../service/userService';

const EditUser =  () => { 
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');

    let {id}= useParams();
    
    useEffect(() => {       
     getUser(id).then((user) => {
     setFirstName(user.firstName);
     setLastName(user.lastName);
     setEmail(user.email);
     setStatus(user.status);})
    }, [])

 
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
        await update({firstName, lastName, email, status,id});   
        // history.push('/index'); 
    } 
 
  return (
    <div style={{ marginTop: 10 }}>
        <h3 align="center">Edit User</h3>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>First Name:  </label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={firstName}                              
                  onChange={handleFirstNameChange}
                  />
            </div>
            <div className="form-group">
                <label>Last Name: </label>
                <input type="text" 
                  className="form-control"
                  value={lastName}                     
                  onChange={handleLastNameChange}
                  />
            </div>
            <div className="form-group">
                <label>Email: </label>
                <input type="email" 
                  className="form-control"
                  value={email}                     
                  onChange={handleEmailChange}
                  />
            </div>
            <div  className="form-group">
                <label>Status: </label>
                <input type="text" 
                  className="form-control"
                  value ={status}                    
                  onChange={handleStatusChange}
                  />
            </div>
            <div className="form-group" style={{ marginTop: 10 }}>
                <input type="submit" 
                  value="Update" 
                  className="btn btn-primary"/>
            </div>
        </form>
    </div>
);
}

export default EditUser;