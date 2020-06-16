const sendToStorageToken = (token) => localStorage.setItem('token', token);

export const fetchToken = async () => (
  fetch('https://opentdb.com/api_token.php?command=request')
    .then((response) => response.json())
    .then(({ token }) => sendToStorageToken(token))
);

export const takeStorageToken = () => localStorage.getItem('token');

export const INITIAL_STORAGE_STATE = {
  player: { name: '', assertions: 0, score: 0, gravatarEmail: '' },
};

export const createPlayerInLocalStorage = (name, gravatarEmail) => {
  const player = { ...INITIAL_STORAGE_STATE.player, gravatarEmail, name };
  localStorage.setItem('state', JSON.stringify({ player }));
};

export const setScore = (pts) => {
  const player = (JSON.parse(localStorage.getItem('state')) || INITIAL_STORAGE_STATE).player;
  const { score, assertions } = player;
  const updatePlayer = { ...player, score: Number(score) + pts, assertions: assertions + 1 };
  localStorage.setItem('state', JSON.stringify({ player: updatePlayer }));
};

export const sendScoreBoard = () => {
  const state = JSON.parse(localStorage.getItem('state')) || INITIAL_STORAGE_STATE;
  const { name, score, gravatarEmail } = state.player;
  const ranking = (JSON.parse(localStorage.getItem('ranking')) || [])
    .filter((player) => player.name !== name);
  localStorage.setItem(
    'ranking',
    JSON.stringify([...ranking, { name, score, picture: gravatarEmail }]),
  );
};

export const takeStorageConfig = () => JSON.parse(localStorage.getItem('config'));
