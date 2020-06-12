export const LOGIN_USER='LOGIN_USER';
export const REGISTER_USER='REGISTER_USER';
export const USER_FROM_TOKEN='USER_FROM_TOKEN';
export const LOGOUT_USER='LOGOUT_USER';
export const FETCH_USER_POSTS='FETCH_USER_POSTS';
export const LIKE_USER_POST= 'LIKE_USER_POST';
export const REMOVE_USER_POST='REMOVE_USER_POST';
export const CREATE_USER_POST='CREATE_USER_POST';
export const UPDATE_USER_POST='UPDATE_USER_POST';

export const getUserFromToken= ()=>{
    return{
        type: USER_FROM_TOKEN
    }
}

export const loginUser=(userDetails)=>{
    return{
        type: LOGIN_USER,
        userDetails
    }
}

export const registerUser= (user) =>{
    return{
        type: REGISTER_USER,
        user
    }
}

export const logoutUser= () =>{
    return{
        type: LOGOUT_USER,
    }
}

export const fetchUserPosts= () =>{
    return{
        type: FETCH_USER_POSTS,
    }
}

export const removePost= (id) =>{
    return{
        type: REMOVE_USER_POST,
        id
    }
}

export const createPost= (post) =>{
    return{
        type: CREATE_USER_POST,
        post
    }
}

export const updatePost= (post) =>{
    return{
        type: UPDATE_USER_POST,
        post
    }
}

export const likePost = (postId) => {
    return{
        type: LIKE_USER_POST,
        postId
    }
}