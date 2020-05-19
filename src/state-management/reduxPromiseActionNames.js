import { ActionType} from 'redux-promise-middleware';

export const pending= action => `${action}_${ActionType.Pending}`;
export const success= action => `${action}_${ActionType.Fulfilled}`;
export const failure= action => `${action}_${ActionType.Rejected}`;