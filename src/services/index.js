const fetchQuestionsAPI = async (args, qnt = 5) => {
  const { token, category, difficulty, type } = args;
  let url = `https://opentdb.com/api.php?amount=${qnt}`;
  if (category || difficulty || type) {
    url += category ? `&category=${category}`: '';
    url += difficulty ? `&difficulty=${difficulty}`: '';
    url += type ? `&type=${type}`: '';
  } else if (token) url += `&token=${token}`;

  return fetch(url)
    .then((response) => { console.log(response);
    return response.json()
    .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
  })
};

export default fetchQuestionsAPI;
