/* eslint-disable no-underscore-dangle */
import * as Actions from "./mainContentActions";
import { pending, success, failure } from "../../reduxPromiseActionNames";

const initialState = {
  isLoading: [],
  categories: [],
  categoryData: {},
  copiedHashtags: null,
};

const mainContentReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case pending(Actions.FETCH_CATEGORIES):
      return {
        ...state,
        isLoading: [...state.isLoading, Actions.FETCH_CATEGORIES],
      };
    case success(Actions.FETCH_CATEGORIES):
      return {
        ...state,
        isLoading: state.isLoading.filter(
          (item) => item !== Actions.FETCH_CATEGORIES
        ),
        categories: payload.data,
      };
    case failure(Actions.FETCH_CATEGORIES):
      return {
        ...state,
        isLoading: state.isLoading.filter(
          (item) => item !== Actions.FETCH_CATEGORIES
        ),
      };
    case pending(Actions.FETCH_HASHTAGS_BY_NAME):
      return {
        ...state,
        isLoading: [...state.isLoading, Actions.FETCH_HASHTAGS_BY_NAME],
      };
    case success(Actions.FETCH_HASHTAGS_BY_NAME):
      return {
        ...state,
        isLoading: state.isLoading.filter(
          (item) => item !== Actions.FETCH_HASHTAGS_BY_NAME
        ),
        categoryData: payload.data,
      };
    case failure(Actions.FETCH_HASHTAGS_BY_NAME):
      return {
        ...state,
        isLoading: state.isLoading.filter(
          (item) => item !== Actions.FETCH_HASHTAGS_BY_NAME
        ),
      };
    case pending(Actions.COPIED_HASHTAGS):
      return {
        ...state,
        isLoading: [...state.isLoading, Actions.COPIED_HASHTAGS],
      };
    case success(Actions.COPIED_HASHTAGS):
      return {
        ...state,
        isLoading: state.isLoading.filter(
          (item) => item !== Actions.COPIED_HASHTAGS
        ),
        copiedHashtags: payload,
      };
    case failure(Actions.COPIED_HASHTAGS):
      return {
        ...state,
        isLoading: state.isLoading.filter(
          (item) => item !== Actions.COPIED_HASHTAGS
        ),
      };
    case pending(Actions.LIKE_POST):
      return {
        ...state,
        isLoading: [...state.isLoading, Actions.LIKE_POST],
      };
    case success(Actions.LIKE_POST):
      return {
        ...state,
        isLoading: state.isLoading.filter((item) => item !== Actions.LIKE_POST),
      };
    case failure(Actions.LIKE_POST):
      return {
        ...state,
        isLoading: state.isLoading.filter((item) => item !== Actions.LIKE_POST),
      };
    case pending(Actions.UPDATE_POST):
      return {
        ...state,
        isLoading: [...state.isLoading, Actions.UPDATE_POST],
      };
    case success(Actions.UPDATE_POST):
      return {
        ...state,
        isLoading: state.isLoading.filter(
          (item) => item !== Actions.UPDATE_POST
        ),
        categoryData: {
          ...state.categoryData,
          posts: [
            ...state.categoryData.posts.filter((p) => p._id !== payload._id),
            payload,
          ],
        },
      };
    case failure(Actions.UPDATE_POST):
      return {
        ...state,
        isLoading: state.isLoading.filter(
          (item) => item !== Actions.UPDATE_POST
        ),
      };
    case pending(Actions.REMOVE_POST):
      return {
        ...state,
        isLoading: [...state.isLoading, Actions.REMOVE_POST],
      };
    case success(Actions.REMOVE_POST):
      return {
        ...state,
        isLoading: state.isLoading.filter(
          (item) => item !== Actions.REMOVE_POST
        ),
        categoryData: {
          ...state.categoryData,
          posts: [...state.categoryData.posts.filter((p) => p._id !== payload)],
        },
      };
    case failure(Actions.REMOVE_POST):
      return {
        ...state,
        isLoading: state.isLoading.filter(
          (item) => item !== Actions.REMOVE_POST
        ),
      };
    default:
      return state;
  }
};

export default mainContentReducer;
