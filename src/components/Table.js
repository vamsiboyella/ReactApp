import React, {useState  } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { deleteUser } from '../service/userService';

const Table =({obj}) => {
    
    const handleDeleteUser = async(event) => {
        event.preventDefault();
        await deleteUser(obj.id);
        window.location.reload(false);
    } 
    return (
        <tr>
          <td>
            {obj.firstName}
          </td>
          <td>
            {obj.lastName}
          </td>
          <td>
            {obj.email}
          </td>
          <td>
            {obj.status?'Active':'Inactive'}
          </td>
          <td>
            <Link to={"/edit/"+obj.id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            <button onClick={handleDeleteUser} className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  
}

export default Table;