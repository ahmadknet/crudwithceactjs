import React from 'react';  
import Employeelist from './employeelist';   
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';  
import './App.css';  
function App() {  
  return (  
    <Router>  
      <div className="container">  
        <nav className="navbar navbar-expand-lg navheader">  
          <div className="collapse navbar-collapse" >  
            <ul className="navbar-nav mr-auto">  
              
              <li className="nav-item">  
                1<Link to={'/Employeelist'} className="nav-link">Employee List</Link>  
              </li>  
            </ul>  
          </div>  
        </nav> <br />  
        <Switch>   
          <Route path='/Employeelist' component={Employeelist} />  
        </Switch>  
      </div>  
    </Router>  
  );  
}  
  
export default App;  