import { AuthState } from './ducks/Auth/types';
import { NotificationState } from './ducks/Notification/types';

export default interface ApplicationState {
  auth: AuthState;
  notification: NotificationState;
}
