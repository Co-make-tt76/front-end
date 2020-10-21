import React, { useEffect } from 'react';
import Issue from './Issue';
import { connect } from 'react-redux';
import { fetchIssues } from '../store/actions/issuesActions';

function IssuesList(props) {

   const { issues, fetchIssues } = props;

   useEffect(() => {
      fetchIssues()
   }, [fetchIssues]);

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
               <Issue issue={issue} key={issue.id}/>
         ))}
      </div>
   )
}

const mapStateToProps = (state) => {
   return {
      issues: state.issuesState.issues
   }
}

export default connect(mapStateToProps, { fetchIssues })(IssuesList);