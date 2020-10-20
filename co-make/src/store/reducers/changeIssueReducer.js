import { UPVOTE_ISSUE } from '../variables';

const mockData = {
   issues: [
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
]};

export const changeIssueReducer = (state = mockData, action) => {
   switch (action.type) {
      default:
         return state;
   }
}