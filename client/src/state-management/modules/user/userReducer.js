/* eslint-disable no-underscore-dangle */
import * as Actions from "./userActions";
import { pending, success, failure } from "../../reduxPromiseActionNames";

const intialState = {
  isLoading: [],
  user: {},
  posts: {},
  isLoggedIn: false,
  error: {}
};
const reducer = (state = intialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case pending(Actions.USER_FROM_TOKEN):
      return {
        ...state,
        isLoading: [...state.isLoading, Actions.USER_FROM_TOKEN],
      };
    case success(Actions.USER_FROM_TOKEN):
      return {
        ...state,
        isLoading: state.isLoading.filter(
          (item) => item !== Actions.USER_FROM_TOKEN
        ),
        user: payload,
        isLoggedIn: !!payload,
      };
    case failure(Actions.USER_FROM_TOKEN):
      return {
        ...state,
        isLoading: state.isLoading.filter(
          (item) => item !== Actions.USER_FROM_TOKEN
        ),
      };
    case pending(Actions.LOGIN_USER):
      return {
        ...state,
        isLoading: [...state.isLoading, Actions.LOGIN_USER],
      };
    case success(Actions.LOGIN_USER):
      return {
        ...state,
        isLoading: state.isLoading.filter(
          (item) => item !== Actions.LOGIN_USER
        ),
        user: payload,
        isLoggedIn: true,
      };
    case failure(Actions.LOGIN_USER):
      return {
        ...state,
        isLoading: state.isLoading.filter(
          (item) => item !== Actions.LOGIN_USER
        ),
        error: payload
      };
    case pending(Actions.REGISTER_USER):
      return {
        ...state,
        isLoading: [...state.isLoading, Actions.REGISTER_USER],
      };

    case success(Actions.REGISTER_USER):
      return {
        ...state,
        isLoading: state.isLoading.filter(
          (item) => item !== Actions.REGISTER_USER
        ),
      };
    case failure(Actions.REGISTER_USER):
      return {
        ...state,
        isLoading: state.isLoading.filter(
          (item) => item !== Actions.REGISTER_USER
        ),
        error: payload
      };
    case pending(Actions.LOGOUT_USER):
      return {
        ...state,
        isLoading: [...state.isLoading, Actions.LOGOUT_USER],
      };
    case success(Actions.LOGOUT_USER):
      return {
        ...state,
        isLoading: state.isLoading.filter(
          (item) => item !== Actions.LOGOUT_USER
        ),
        user: {},
        isLoggedIn: false,
      };
    case failure(Actions.LOGOUT_USER):
      return {
        ...state,
        isLoading: state.isLoading.filter(
          (item) => item !== Actions.LOGOUT_USER
        ),
      };
    case pending(Actions.FETCH_USER_POSTS):
      return {
        ...state,
        isLoading: [...state.isLoading, Actions.FETCH_USER_POSTS],
      };
    case success(Actions.FETCH_USER_POSTS):
      return {
        ...state,
        isLoading: state.isLoading.filter(
          (item) => item !== Actions.FETCH_USER_POSTS
        ),
        posts: { posts: payload.data },
      };
    case failure(Actions.FETCH_USER_POSTS):
      return {
        ...state,
        isLoading: state.isLoading.filter(
          (item) => item !== Actions.FETCH_USER_POSTS
        ),
      };
    case pending(Actions.REMOVE_USER_POST):
      return {
        ...state,
        isLoading: [...state.isLoading, Actions.REMOVE_USER_POST],
      };
    case success(Actions.REMOVE_USER_POST):
      return {
        ...state,
        isLoading: state.isLoading.filter(
          (item) => item !== Actions.REMOVE_USER_POST
        ),
        posts: {
          ...state.posts,
          posts: [...state.posts.posts.filter((p) => p._id !== payload)],
        },
      };
    case failure(Actions.REMOVE_USER_POST):
      return {
        ...state,
        isLoading: state.isLoading.filter(
          (item) => item !== Actions.REMOVE_USER_POST
        ),
      };
    case pending(Actions.CREATE_USER_POST):
      return {
        ...state,
        isLoading: [...state.isLoading, Actions.CREATE_USER_POST],
      };
    case success(Actions.CREATE_USER_POST):
      return {
        ...state,
        isLoading: state.isLoading.filter(
          (item) => item !== Actions.CREATE_USER_POST
        ),
        posts: {
          ...state.posts,
          posts: [...state.posts.posts, payload.data],
        },
      };
    case failure(Actions.CREATE_USER_POST):
      return {
        ...state,
        isLoading: state.isLoading.filter(
          (item) => item !== Actions.CREATE_USER_POST
        ),
      };
    case pending(Actions.LIKE_USER_POST):
      return {
        ...state,
        isLoading: [...state.isLoading, Actions.LIKE_USER_POST],
      };
    case success(Actions.LIKE_USER_POST):
      return {
        ...state,
        isLoading: state.isLoading.filter((item) => item !== Actions.LIKE_USER_POST),
      };
    case failure(Actions.LIKE_USER_POST):
      return {
        ...state,
        isLoading: state.isLoading.filter((item) => item !== Actions.LIKE_USER_POST),
      };
    case pending(Actions.UPDATE_USER_POST):
      return {
        ...state,
        isLoading: [...state.isLoading, Actions.UPDATE_USER_POST],
      };
    case success(Actions.UPDATE_USER_POST):
      return {
        ...state,
        isLoading: state.isLoading.filter(
          (item) => item !== Actions.UPDATE_USER_POST
        ),
        posts: {
          ...state.posts,
          posts: [
            ...state.posts.posts.filter((p) => p._id !== payload._id),
            payload,
          ],
        },
      };
    case failure(Actions.UPDATE_USER_POST):
      return {
        ...state,
        isLoading: state.isLoading.filter(
          (item) => item !== Actions.UPDATE_USER_POST
        ),
      };
    default:
      return state;
  }
};

export default reducer;
