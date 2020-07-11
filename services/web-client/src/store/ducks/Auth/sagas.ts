import { call, put } from 'redux-saga/effects';

import api, { injectToken } from '~/services/api';

import { sendSuccess, sendFailure } from './actions';
import { AuthType, AuthData } from './types';

export function* signIn({
  payload,
}: {
  type: typeof AuthType.SIGN_IN_REQUEST;
  payload: AuthData;
}) {
  try {
    const {
      data: { token, user },
    } = yield call(api.post, 'sessions', payload);
    localStorage.setItem(`@${process.env.APP_NAME}-token`, token);
    localStorage.setItem(`@${process.env.APP_NAME}-userData`, user);
    injectToken(token);
    yield put(sendSuccess(user));
  } catch (error) {
    yield put(sendFailure());
  }
}
