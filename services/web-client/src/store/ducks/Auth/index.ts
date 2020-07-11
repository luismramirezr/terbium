import { Reducer } from 'redux';
import { AuthState, AuthType } from './types';

const INITIAL_STATE: AuthState = {
  fail: false,
  loading: false,
  isAuth: false,
  userData: {},
};

const savedToken = localStorage.getItem(`@${process.env.APP_NAME}-token`);
const savedUser = localStorage.getItem(`@${process.env.APP_NAME}-userData`);

const reducer: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthType.SIGN_IN_REQUEST:
      return { ...state, loading: true };
    case AuthType.SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        fail: false,
        isAuth: true,
        username: action.payload,
      };
    case AuthType.SIGN_IN_FAIL:
      return { ...state, loading: false, fail: true, isAuth: false };
    case AuthType.IS_AUTH_CHECK:
      return {
        ...state,
        loading: false,
        fail: false,
        isAuth: !!savedToken,
        username: savedUser ? JSON.parse(savedUser) : {},
      };
    default:
      return state;
  }
};

export default reducer;
