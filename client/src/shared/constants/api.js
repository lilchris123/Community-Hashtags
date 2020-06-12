const isProduction= process.env.NODE_ENV ==='production';
const API_HOSTNAME= isProduction ? 'communityhashtags.herokuapp' :'localhost';
const PORT= 8080;
export const API_URL= `http${isProduction ? 's': ''}://${API_HOSTNAME}:${PORT}/api`;

export const addTokenConfig={
    headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
    }
}