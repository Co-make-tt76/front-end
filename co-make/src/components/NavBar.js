import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom'
import LoginDropDown from './LoginDropDown'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from "reactstrap";
import { connect } from 'react-redux';
import { setLoggedOut } from '../store/actions/userActions';



function NavBar(props) {

	const { setLoggedOut } = props;

	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);
	const { push } = useHistory();



	const handleSignOut = e => {
		e.preventDefault();
		setLoggedOut()
		push("/")
	}

	return (
		<div className='navbar-container'>
			<Navbar color="dark" dark expand="md">
			<NavbarBrand href="/">CO|MAKE</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
					<NavItem>
						<LoginDropDown />
					</NavItem>
					<NavItem>
						<NavLink tag={Link} to='/issues'>Issues</NavLink>
					</NavItem>
					<NavItem>
						<NavLink tag={Link} to='/addIssue'>Add Issue</NavLink>
					</NavItem>
					<NavItem>
						<NavLink tag={Link} to='/about'>About</NavLink>
					</NavItem>
					<NavItem>
						<NavLink tag={Link} to='/' onClick={handleSignOut}>Sign Out</NavLink>
						
					</NavItem>
				</Nav>
          </Collapse>
        </Navbar>
		</div>
	);
}

export default connect(null, { setLoggedOut })(NavBar);