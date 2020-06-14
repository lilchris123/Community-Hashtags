import _ from 'lodash';

export const getLoading= _.property('user.isLoading');
export const getUser= _.property('user.user');
export const getLoggedIn= _.property('user.isLoggedIn');
export const getPosts= _.property('user.posts');
export const getError= _.property('user.error');
export const getFormStatus= _.property('user.formStatus');