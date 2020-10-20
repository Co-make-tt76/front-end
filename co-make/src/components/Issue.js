import React from 'react';
import {
   Card, CardText, CardBody,
   CardTitle, Button
 } from 'reactstrap';

export default function Issue(props) {

   const { issue, upvote } = props;

   return (
      <div className='issue-container'>
         <Card>
            <CardBody className='card-body'>
               <CardText>Report: {issue.report}</CardText>
               <CardText>Proposed Solution: TESTING TESTING {issue.proposedSolution}</CardText>
               <div className='big-location-container'>
                  <CardTitle className='location'>Location:</CardTitle>
                  <div className='location-container'>
                     <p>{issue.incidentLocation}</p>
                     <p>{issue.city}, {issue.state} {issue.zip}</p>
                  </div>
               </div>
               <Button className='edit-button'>Edit</Button>
               <div className='upvote-container'>
                  <Button className='upvote-button' onClick={upvote}>Upvote</Button>
                  <p>{issue.upvoteCount}</p>
               </div>
            </CardBody>
         </Card>
      </div>
   )
}