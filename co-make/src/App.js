import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import IssuesList from './components/IssuesList';
import LoginRegisterTab from './components/LoginRegisterTab'
import AddNewIssue from './components/AddNewIssue';
import EditIssue from './components/EditIssue'



function App() {
	return (
		<div className="App">
			<NavBar />
			<div className='routes'>
				<Switch>
					<Route exact path={["/", "/issues"]} component={IssuesList} />
					<Route path="/login" component={() => <LoginRegisterTab tab={'2'} />} />
					<Route path='/register' component={() => <LoginRegisterTab tab={'1'} /> } />
					<Route path='/addIssue' component={AddNewIssue} />
					<Route path='/editIssue' component={EditIssue} />
				</Switch>
			</div>
		</div>

		
	);
}

export default App;
