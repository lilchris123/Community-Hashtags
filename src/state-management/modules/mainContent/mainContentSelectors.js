import _ from 'lodash';

export const getLoading = _.property('mainContent.isLoading');
export const getHashtags = _.property('mainContent.hashtags');
export const getCategoryHashtags = _.property('mainContent.categoryHashtags');
export const getCopiedHashtags= _.property('mainContent.copiedHashtags');