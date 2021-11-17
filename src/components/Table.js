import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { deleteUser } from '../service/userService';

class Table extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        deleteUser(this.props.obj.id);
        // axios.get('http://localhost:3004/users/'+this.props.obj.id)
        //     .then(console.log('Deleted'))
        //     .catch(err => console.log(err))
    }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.firstName}
          </td>
          <td>
            {this.props.obj.lastName}
          </td>
          <td>
            {this.props.obj.email}
          </td>
          <td>
            {this.props.obj.status}
          </td>
          <td>
            <Link to={"/edit/"+this.props.obj.id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default Table;