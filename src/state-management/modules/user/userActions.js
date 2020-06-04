export const LOGIN_USER='LOGIN_USER';
export const REGISTER_USER='REGISTER_USER';
export const USER_FROM_TOKEN='USER_FROM_TOKEN';
export const LOGOUT_USER='LOGOUT_USER';
export const FETCH_USER_POSTS='FETCH_USER_POSTS';

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