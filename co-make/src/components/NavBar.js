import React from 'react';
import { Link } from 'react-router-dom'
import {
	Navbar,
	Nav,
	NavItem,
	NavLink,
	NavbarText
} from 'reactstrap';
import { useHistory } from 'react-router-dom';



export default function NavBar() {

	const { push } = useHistory();

	const handleSignOut = e => {
		e.preventDefault();
		push('/issues')
	}

	return (
		<div>
			<Navbar color="dark" dark expand="md">
			<NavbarText>Co-Make</NavbarText>
				<Nav className="ml-auto" navbar>
					<NavItem>
						<NavLink tag={Link} to='/login'>Login</NavLink>
					</NavItem>
					<NavItem>
						<NavLink tag={Link} to='/issues'>Issues</NavLink>
					</NavItem>
					<NavItem>
						<NavLink tag={Link} to='/addIssue'>Add Issue</NavLink>
					</NavItem>
					<NavItem>
						<NavLink tag={Link} onClick={handleSignOut}>Sign Out</NavLink>
					</NavItem>
				</Nav>

			</Navbar>
		</div>
	);
}