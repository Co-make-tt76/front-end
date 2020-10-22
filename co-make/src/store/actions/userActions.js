import { LOG_USER_IN } from '../variables'

export const setLoggedIn = () => (dispatch) => {
   dispatch({ type: LOG_USER_IN })
}