import React, { Component } from 'react';
import Table from './Table';
import { getUsers } from '../service/userService';

export default class DisplayUsers extends Component {

  constructor(props) {
      super(props);
      this.state = {users: []};
   
    }
    componentDidMount(){
        this.fetchData();                   
    }

    fetchData(){         
        getUsers().then((data) =>  this.setState({ users: data })); 
    }

    tabRow(){      
      return this.state.users.map((object, i)=>{        
          return <Table obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div>
          <h3 align="center">Users List</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Email</th>
                <th>Status</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
      );
    }
  }