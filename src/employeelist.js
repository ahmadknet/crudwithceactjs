import React, { Component } from 'react';  
import axios from 'axios';  
import Table from './Table';  
  
export default class Studentlist extends Component {  
  
  constructor(props) {  
      super(props);  
      this.state = {business: []};  
    }  
    componentDidMount(){  
      //debugger;  
      axios.get('https://localhost:7192/api/Employees')  
        .then(response => {  
          this.setState({ business: response.data });  
          //debugger;  
          console.log('response: '+ JSON.stringify(response.data));  
        })  
        .catch(function (error) {  
          console.log(error);  
        })  
    }  
      
    tabRow(){  
      return this.state.business.map(function(object, i){  
          return <Table obj={object} key={i} />;  
      });  
    }  
  
    render() {  
      return (  
        <div>  
          <h4 align="center">Student List</h4>  
          <table className="table table-striped" style={{ marginTop: 10 }}>  
            <thead>  
              <tr>  
                <th>FirstName</th>  
                
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