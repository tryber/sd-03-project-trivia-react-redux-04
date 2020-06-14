const sendToStorageToken = (token) => localStorage.setItem('token', token);

export const fetchToken = async () => (
  fetch('https://opentdb.com/api_token.php?command=request')
    .then((response) => response.json())
    .then(({ token }) => sendToStorageToken(token))
);

export const takeStorageToken = () => localStorage.getItem('token');

export const setScore = (pts) => {
  const player = JSON.parse(localStorage.getItem('state')).player;
  const { score, assertions } = player;
  const updatePlayer = { ...player, score: Number(score) + pts, assertions: assertions + 1 };
  localStorage.setItem('state', JSON.stringify({ player: updatePlayer }));
};

export const sendScoreBoard = () => {
  const { name, score, gravatarEmail } = JSON.parse(localStorage.getItem('state')).player;
  const ranking = JSON.parse(localStorage.getItem('ranking')) || [];
  localStorage.setItem(
    'ranking',
    JSON.stringify([...ranking, { name, score, picture: gravatarEmail }]),
  );
};
