export const FETCH_CATEGORIES= 'FETCH_CATEGORIES';
export const FETCH_HASHTAGS_BY_NAME= 'FETCH_HASHTAGS_BY_NAME';
export const COPIED_HASHTAGS= 'COPIED_HASHTAGS';
export const LIKE_POST= 'LIKE_POST';
export const UPDATE_POST='UPDATE_POST';
export const REMOVE_POST='REMOVE_POST';

export const fetchCategories = () => {
    return{
        type: FETCH_CATEGORIES
    }
}

export const fetchHashtagsByCategory = (category) => {
    return{
        type: FETCH_HASHTAGS_BY_NAME,
        category
    }
}

export const copiedHashtags = (id) => {
    return{
        type: COPIED_HASHTAGS,
        tagId: id
    }
}

export const likePost = (postId) => {
    return{
        type: LIKE_POST,
        postId
    }
}

export const updatePost= (post) =>{
    return{
        type: UPDATE_POST,
        post
    }
}

export const removePost= (id) =>{
    return{
        type: REMOVE_POST,
        id
    }
}