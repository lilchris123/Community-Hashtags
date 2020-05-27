export const FETCH_CATEGORIES= 'FETCH_CATEGORIES';
export const FETCH_HASHTAGS_BY_NAME= 'FETCH_HASHTAGS_BY_NAME';
export const COPIED_HASHTAGS= 'COPIED_HASHTAGS';

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
