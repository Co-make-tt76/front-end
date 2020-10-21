import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { FETCH_ISSUES_START, FETCH_ISSUES_SUCCESS, 
   UPVOTE_ISSUE_START, UPVOTE_ISSUE_SUCCESS, 
   DELETE_ISSUE_START, DELETE_ISSUE_SUCCESS 
} from '../variables';

export const fetchIssues = () => (dispatch) => {
   dispatch({ type: FETCH_ISSUES_START });
   axiosWithAuth()
      .get('/issues/all')
      .then(res => {
         dispatch({ type: FETCH_ISSUES_SUCCESS, payload: res.data})
      })
      .catch(err => {
         console.log('RESPONSEERROR', err)
      })
}

export const upvoteIssue = (issue) => (dispatch) => {
   dispatch({ type : UPVOTE_ISSUE_START })
   const currentUpvotes = issue.upvotes
   const upvotedIssue = { ...issue, upvotes : currentUpvotes + 1 }
   axiosWithAuth()
      .put(`/issues/${issue.id}`, upvotedIssue)
      .then(res => {
         console.log(res)
         dispatch({ type : UPVOTE_ISSUE_SUCCESS, payload: upvotedIssue })
      })
      .catch(err => console.log(err))
}

export const deleteIssue = (id) => (dispatch) => {
   dispatch({ type: DELETE_ISSUE_START });
   axiosWithAuth()
      .delete(`issues/all/${id}`)
      .then(res => {
         console.log(res)
         dispatch({ type: DELETE_ISSUE_SUCCESS, payload: res.data })
      })
      .catch(err => {
         console.log(err)
      })
}