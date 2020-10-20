import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Issue from './Issue';
import { connect } from 'react-redux';

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
      issues: state.issues
   }
}

export default connect(mapStateToProps, {})(IssuesList);