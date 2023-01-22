import React, { Component } from 'react';  
import axios from 'axios';  
import { Link } from 'react-router-dom';  
class Table extends Component {  
  constructor(props) {  
    super(props);  
    }  
      

  render() {  
    return (  
        <tr>  
          <td>  
            {this.props.obj.firstName}  
          </td>  
        
 
        </tr>  
    );  
  }  
}  
  
export default Table;  