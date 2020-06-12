export const FETCH_POSTS_BY_SEARCH= 'FETCH_POSTS_BY_SEARCH';

export const fetchPostsBySearch = (query) => {
    return{
        type: FETCH_POSTS_BY_SEARCH,
        query
    }
}