import { combineReducers } from 'redux';
import { fetchIssuesReducer as fetchIssuesState } from './fetchIssuesReducer';
import { changeIssueReducer as changeIssueState } from './changeIssueReducer';

export const rootReducer = combineReducers({
   fetchIssuesState,
   changeIssueState
})