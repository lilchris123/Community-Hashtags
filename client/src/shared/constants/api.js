const API_HOSTNAME= process.env.NODE_ENV ==='production' ? 'communityhashtags.herokuapp' :'localhost';
const PORT= 8080;
export const API_URL= `http://${API_HOSTNAME}:${PORT}/api`;

export const addTokenConfig={
    headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
    }
}