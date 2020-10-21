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
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from "reactstrap";



export default function NavBar() {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);
	const { push } = useHistory();



	const handleSignOut = e => {
		e.preventDefault();
		push('/issues')
	}

	return (
		<div>
			<Navbar color="dark" dark expand="md">
			<NavbarBrand href="/issues">CO|MAKE</NavbarBrand>
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
						<NavLink tag={Link} to='' onClick={handleSignOut}>Sign Out</NavLink>
					</NavItem>
				</Nav>
          </Collapse>
        </Navbar>
		</div>
	);
}