import _ from 'lodash';

export const getLoading = _.property('mainContent.isLoading');
export const getCategories = _.property('mainContent.categories');
export const getCategoryData = _.property('mainContent.categoryData');
export const getCopiedHashtags= _.property('mainContent.copiedHashtags');