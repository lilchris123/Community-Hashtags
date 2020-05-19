import _ from 'lodash';

export const getLoading = _.property('mainContent.isLoading');
export const getTopTags = _.property('mainContent.topTags');
export const getCopiedHashtags= _.property('mainContent.copiedHashtags');