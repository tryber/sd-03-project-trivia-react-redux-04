export const fetchQuestionsAPI = (token) => (
  fetch(token 
    ? `https://opentdb.com/api.php?amount=5&token=${token}`
    : 'https://opentdb.com/api_token.php?command=request')
    .then((response) => response
      .json()
        .then(
          (json) => response.ok ? Promise.resolve(json) : Promise.reject(json.message)
        )
    )
);

export default fetchQuestionsAPI;
