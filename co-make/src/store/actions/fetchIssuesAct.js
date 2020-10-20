import axios from 'axios';
import { FETCH_ISSUES_START, FETCH_ISSUES_SUCCESS } from '../variables';

export const fetchIssues = () => (dispatch) => {
   dispatch({ type: FETCH_ISSUES_START });
   axios
      .get('FAKEURL')
      .then(res => {
         console.log('RESPONSESUCCESS', res)
      })
      .catch(err => {
         console.log('RESPONSEERROR', err)
      })
}