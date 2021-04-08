import React, { Component } from 'react';
import task from './task';
import user from './user';
import Homepage from './Homepage';
import { Link } from 'react-router-dom';
import { Nav,} from 'react-bootstrap';

class Navbar extends Component {
	render() {
		return(
			<nav className= "navbar navbar-dark bg-dark navbar-expand-lg ">
            
			<div className= "collapse navbar-collapse">
	  			<ul className= "navbar-nav mr-auto">
				 
				  
				  <Nav variant="pills" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      @NiMapTechnology
    </Nav.Link>
  </Nav.Item>
</Nav>
                      
	  					  				<li className= "navbar-item">
	  					<Link to= "/login" className= "nav-link"><span>Login</span></Link>
	  				</li> 
                      <li className= "navbar-item">
	  					<Link to= "Homepage" className= "nav-link"><span>Home</span></Link>
                          </li>
						  <li className= "navbar-item">
	  					<Link to= "/task" className= "nav-link">Task</Link>
	  				</li>
						  
                      <li className= "navbar-item">
	  					<Link to= "/user" className= "nav-link"><span/>User</Link>
	  				</li>
                      	 	 
	  			</ul>
				  
	  			</div>
				 
                  
				  
			</nav>
			
		);
	}
}

export default Navbar;