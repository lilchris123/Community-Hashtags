import _ from 'lodash';

export const getLoading= _.property('user.isLoading');
export const getUser= _.property('user.user');
export const getLoggedIn= _.property('user.isLoggedIn');