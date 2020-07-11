import { action } from 'typesafe-actions';
import { AuthType, AuthData } from './types';

export const sendRequest = (data: AuthData) =>
  action(AuthType.SIGN_IN_REQUEST, data);

export const sendSuccess = (data: string) =>
  action(AuthType.SIGN_IN_SUCCESS, data);

export const sendFailure = () => action(AuthType.SIGN_IN_FAIL);

export const checkAuth = () => action(AuthType.IS_AUTH_CHECK);
