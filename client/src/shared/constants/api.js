const isProduction= process.env.NODE_ENV ==='production';
const API_HOSTNAME= isProduction ? 'communityhashtags.herokuapp.com' :'localhost';
const PORT= 8080;
export const API_URL= isProduction ? `https://${API_HOSTNAME}/api`: `http://${API_HOSTNAME}:${PORT}/api` ;

export const addTokenConfig= ()=>{
   return {
   headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
    }}
}