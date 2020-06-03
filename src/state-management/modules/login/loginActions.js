export const LOGIN_USER='LOGIN_USER';

export const loginUser=(userDetails)=>{
    return{
        type: LOGIN_USER,
        userDetails
    }
}