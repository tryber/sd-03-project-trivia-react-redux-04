const sendToStorageToken = (token) => localStorage.setItem('token', token);

export const fetchToken = async () => (
  fetch('https://opentdb.com/api_token.php?command=request')
    .then((response) => response.json())
    .then(({ token }) => sendToStorageToken(token))
);

export const takeStorageToken = () => localStorage.getItem('token');
