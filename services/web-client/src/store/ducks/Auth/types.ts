/**
 * ACTION TYPES
 */

export enum AuthType {
  'IS_AUTH_CHECK' = '@auth/IS_AUTH_CHECK',
  'IS_AUTH_SUCCESS' = '@auth/IS_AUTH_SUCCESS',
  'IS_AUTH_FAIL' = '@auth/IS_AUTH_FAIL',
  'SIGN_IN_REQUEST' = '@auth/SIGN_IN_REQUEST',
  'SIGN_IN_SUCCESS' = '@auth/SIGN_IN_SUCCESS',
  'SIGN_IN_FAIL' = '@auth/SIGN_IN_FAIL',
}

/**
 * DATA
 */

export interface AuthData {
  username: string;
  password: string;
}

export interface UserData {
  name: string;
}

/**
 * STATE
 */

export interface AuthState {
  readonly fail: boolean;
  readonly isAuth: boolean;
  readonly loading: boolean;
  readonly userData: UserData | {};
}
