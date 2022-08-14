const {REACT_APP_API_PORT} = process.env;
// const isProduction= NODE_ENV ==='production';
// const REACT_APP_API_HOSTNAME= isProduction ? 'communityhashtags.herokuapp.com' :'localhost';
// export const API_URL= isProduction ? `https://${API_HOSTNAME}/api`: `http://${API_HOSTNAME}:${REACT_APP_API_PORT}/api` ;
export const API_URL= `http://localhost:${REACT_APP_API_PORT}/api`;

export const addTokenConfig= ()=>{
   return {
   headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
    }}
}