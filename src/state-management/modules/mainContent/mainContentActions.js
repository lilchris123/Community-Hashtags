export const FETCH_TOPHASHTAGS= 'FETCH_TOPHASHTAGS';
export const COPIED_HASHTAGS= 'COPIED_HASHTAGS';

export const fetchTopHashtags = () => {
    return{
        type: FETCH_TOPHASHTAGS
    }
}

export const copiedHashtags = (id) => {
    return{
        type: COPIED_HASHTAGS,
        tagId: id
    }
}
