import { FETCH_ISSUES_START, FETCH_ISSUES_SUCCESS, UPVOTE_ISSUE } from '../variables';

const initialState = {
   issuesListIsLoading: false,
   issues: []
}

export const issuesReducer = (state = initialState, action) => {
   switch (action.type) {
      case FETCH_ISSUES_START: 
         return {
            ...state, 
            issuesListIsLoading: true
         };
      case FETCH_ISSUES_SUCCESS: 
         return {
            ...state,
            issues: action.payload,
            issuesListIsLoading: false
         };
      case UPVOTE_ISSUE: 
      return {
         ...state,
         issues: state.issues.map(issue => {
            if (issue.id === action.payload.id) {
               const upvotes = issue.upvoteCount;
               return { ...issue, upvoteCount : upvotes + 1 }
            } else {
               return issue
            }
         })
      }
      default:
         return state;
   }
}
