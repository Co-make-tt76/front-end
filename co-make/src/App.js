import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import IssuesList from './components/IssuesList';
import LoginRegisterTab from './components/LoginRegisterTab'
import AddNewIssue from './components/AddNewIssue';
import EditIssue from './components/EditIssue'
import Footer from './components/Footer'
<<<<<<< HEAD
import Comment from './components/Comment'
import LandingSection from './components/LandingSection'
=======
import LandingSection from './components/LandingSection';
>>>>>>> 99e41d34e12ba14dece382722bf84d7192c8d6d0



function App() {
	return (
		<div className="App">
			<NavBar />
			<div className='routes'>
<<<<<<< HEAD
				<Route exact path='/' component={LandingSection} />
				<Route exact path={["/", "/issues"]} component={IssuesList} />
				<Route path="/login" component={() => <LoginRegisterTab tab={'2'} />} />
				<Route path='/register' component={() => <LoginRegisterTab tab={'1'} /> } />
				<Route path='/addIssue' component={AddNewIssue} />
				<Route path='/editIssue/:id' component={EditIssue} />
				<Route path='/addComment/:id' component={Comment} />
=======
					<Route exact path='/' component={LandingSection} />
					<Route exact path={["/", "/issues"]} component={IssuesList} />
					<Route path="/login" component={() => <LoginRegisterTab tab={'2'} />} />
					<Route path='/register' component={() => <LoginRegisterTab tab={'1'} /> } />
					<Route path='/addIssue' component={AddNewIssue} />
					<Route path='/editIssue/:id' component={EditIssue} />
>>>>>>> 99e41d34e12ba14dece382722bf84d7192c8d6d0
			</div>
			<Footer />
		</div>

		
	);
}

export default App;
