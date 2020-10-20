import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Issue from './Issue';

const mockIssues = [
   {
      id: 1,
      firstName: 'jon',
      lastName: 'snow',
      incidentLocation: 'rainbow rd',
      address2: '', 
      city: 'kokomo',
      state: 'indiana',
      zip: '46970',
      upvoteCount: 0,
      comments: [],
      report: 'there is a freaking zombie in the freezing cold up there and i just got stabbed by my homies but ill come back from the dead idk',
      proposedSolution: 'idk JUST FIX IT',
      solution: ''
   },
   {
      id: 2,
      firstName: 'jamie',
      lastName: 'lanister',
      incidentLocation: 'THE rd',
      address2: '', 
      city: 'mars',
      state: 'jupiter',
      zip: '65487',
      upvoteCount: 0,
      comments: [],
      report: 'MY HAND GOT CHOPPED OFF AND I CANT BE THE BIGGEST PIMP IN WESTOROS ANYMORE',
      proposedSolution: 'idk JUST FIX IT PLEEEEEEEEEEEEEEEEEEEASE',
      solution: ''
   }
]

export default function IssuesList() {

   const [issues, setIssues] = useState(mockIssues);

   useEffect(() => {
      axios
         .get('https://comake-backend-tt76.herokuapp.com/issues')
         .then(res => {
            console.log(res)
         })
         .catch(err => {
            console.log(err)
         })
   },[setIssues])

   const upvote = issueId => {
      setIssues(
         issues.map(issue => {
         if (issueId === issue.id) {
            const upvotes = issue.upvoteCount;
            return { ...issue, upvoteCount : upvotes + 1 }
         } else {
         return issue
      }
      }))
      console.log('upvote')

   }

   return (
      <div className='issues-list-container'>
         {issues.map((issue) => (
               <Issue issue={issue} upvote={() => upvote(issue.id)} key={issue.id}/>
            
         ))}
      </div>
   )
}