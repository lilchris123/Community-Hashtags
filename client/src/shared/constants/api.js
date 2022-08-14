const { REACT_APP_API_HOSTNAME, REACT_APP_API_PORT, NODE_ENV } = process.env;
const isProduction = NODE_ENV === "production";
// const REACT_APP_API_HOSTNAME= isProduction ? 'communityhashtags.herokuapp.com' :'localhost';
console.log(`${REACT_APP_API_HOSTNAME } ${ REACT_APP_API_PORT}`);
export const API_URL = isProduction
  ? `http://${REACT_APP_API_HOSTNAME}:${REACT_APP_API_PORT}/api`
  : `http://localhost:${REACT_APP_API_PORT}/api`;

export const addTokenConfig = () => {
  return {
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },
  };
};
