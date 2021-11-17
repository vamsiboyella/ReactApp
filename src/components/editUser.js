import React, {useState, useEffect} from 'react';
import { useParams ,useHistory } from 'react-router';
import { update,getUser } from '../service/userService';

const EditUser =  () => { 
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState();

    let {id}= useParams();
    const history = useHistory();

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
        let text = event.target.value;
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(text) === false) {
          console.log("Email is Not Correct");   
          //highlighting the inputbox and preventing submit can be done
          setEmail(text);      
          return false;
        }
        else {
          setEmail(text);
          console.log("Email is Correct");
        }
    }
    const handleStatusChange = (event) => {
        event.preventDefault();       
        setStatus(event.target.checked);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        await update({firstName, lastName, email, status,id});  
     
        history.push('/index'); 
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
            <div className="form-group">
            <div  className="form-check">
                <label className="form-check-label">Status</label>
                <input type="checkbox"           
                  checked={status}    
                  className="form-check-input"              
                  onChange={handleStatusChange}
                  />
            </div>
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