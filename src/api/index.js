const baseUrl = 'https://api.twitter.com/';
export const auth = (key, secret) => {
  const creds = btoa(`${key}:${secret}`);
  const authConfig = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      Authorization: `Basic ${creds}`,
    },
    body: 'grant_type=client_credentials',
  };
  return fetch(`${baseUrl}/oauth2/token`, authConfig);
};
export const search = (term) => {
  const token = localStorage.getItem('token');
  const encodedTerm = encodeURI(term);
  const searchConfig = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return fetch(
    `${baseUrl}/1.1/search/tweets.json?q=${encodedTerm}&result_type=popular`,
    searchConfig,
  );
};
