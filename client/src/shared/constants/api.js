const API_HOSTNAME='localhost'
const PORT= 8080;
export const API_URL= `http://${API_HOSTNAME}:${PORT}/api`;

export const addTokenConfig={
    headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
    }
}