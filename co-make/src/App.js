import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import IssuesList from './components/IssuesList';
import LoginRegisterTab from './components/LoginRegisterTab'
import Login from './components/Login';
import Register from './components/Register';
import AddNewIssue from './components/AddNewIssue';

function App() {
	return (
		<div className="App">
			<NavBar />
			<p>HELLO CO-MAKE TEAM</p>
			
			

			<div className='routes'>
				<Switch>
					<Route exact path={["/", "/issues"]} component={IssuesList} />
					<Route path="/login" component={() => <LoginRegisterTab tab={'2'} />} />
					<Route path='/register' component={() => <LoginRegisterTab tab={'1'} /> } />
					<Route path='/addIssue' component={AddNewIssue} />
				</Switch>
			</div>
		</div>

		
	);
}

export default App;
