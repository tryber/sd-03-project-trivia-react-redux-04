export const fetchQuestionsAPI = (token, qnt = 5) => (
  fetch(`https://opentdb.com/api.php?amount=${qnt}&token=${token}`)
    .then((response) => response
      .json().then((json) => {
        if (response.ok) return Promise.resolve(json);
        return Promise.reject(json.message);
      }),
    )
);

export default fetchQuestionsAPI;
