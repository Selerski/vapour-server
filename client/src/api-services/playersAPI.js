const getPlayers = async ENDPOINT => {
  const url = `${ENDPOINT}users/find-all`;
  const response = await fetch(url, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'GET'
  })
    .then(res => res.json())
    .catch(err => console.log(err));
  return response;
};

export { getPlayers };
