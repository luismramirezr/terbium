import { all, takeLatest } from 'redux-saga/effects';

import { AuthType } from './Auth/types';
import { NotificationType } from './Notification/types';

import { signIn as SignIn } from './Auth/sagas';
import {
  notify as NotificationAdd,
  notifyFromError as NotificationFromError,
} from './Notification/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthType.SIGN_IN_REQUEST, SignIn),
    takeLatest(NotificationType.ADD_NOTIFICATION, NotificationAdd),
    takeLatest(NotificationType.REQUEST_ERROR, NotificationFromError),
  ]);
}
