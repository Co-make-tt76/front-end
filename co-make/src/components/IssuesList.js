import React, { useEffect } from 'react';
import Issue from './Issue';
import { connect } from 'react-redux';
import { fetchIssues } from '../store/actions/fetchIssuesAct';

function IssuesList(props) {

   const { issues } = props;

   // useEffect(() => {
   //    axios
   //       .get('https://comake-backend-tt76.herokuapp.com/issues')
   //       .then(res => {
   //          console.log(res)
   //       })
   //       .catch(err => {
   //          console.log(err)
   //       })
   // },[setIssues])

   useEffect(() => {
      fetchIssues()
   }, []);

   const upvote = e => {
      e.preventDefault()
   }

   // const upvote = issueId => {
   //    setIssues(
   //       issues.map(issue => {
   //       if (issueId === issue.id) {
   //          const upvotes = issue.upvoteCount;
   //          return { ...issue, upvoteCount : upvotes + 1 }
   //       } else {
   //       return issue
   //    }
   //    }))
   //    console.log('upvote')
   // }

   return (
      <div className='issues-list-container'>
         {issues.map((issue) => (
               <Issue issue={issue} upvote={() => upvote(issue.id)} key={issue.id}/>
            
         ))}
      </div>
   )
}

const mapStateToProps = (state) => {
   return {
      issues: state.fetchIssuesState.issues
   }
}

export default connect(mapStateToProps, { fetchIssues })(IssuesList);