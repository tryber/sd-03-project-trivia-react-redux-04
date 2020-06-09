export const fetchQuestionsAPI = (token, qnt = 5) => (
  fetch(`https://opentdb.com/api.php?amount=${qnt}&token=${token}`)
    .then((response) => response
      .json()
        .then((json) => response.ok ? Promise.resolve(json) : Promise.reject(json.message))
    )
);

export default fetchQuestionsAPI;
