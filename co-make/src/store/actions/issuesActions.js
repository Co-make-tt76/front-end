import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { FETCH_ISSUES_START, FETCH_ISSUES_SUCCESS, UPVOTE_ISSUE } from '../variables';

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
   dispatch({ type : UPVOTE_ISSUE, payload: issue })
} 