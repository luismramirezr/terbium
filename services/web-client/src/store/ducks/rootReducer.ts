import { combineReducers } from 'redux';

import auth from './Auth';
import notification from './Notification';

export default combineReducers({
  auth,
  notification,
});
