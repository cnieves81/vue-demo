import axios from 'axios';

const baseUrl = 'http://localhost:8125';

export const auth = () => axios.get(
  'http://localhost:8125/token',
);

export const search = (term) => {
  const token = localStorage.getItem('token');
  const encodedTerm = encodeURI(term);
  return axios.get(
    `${baseUrl}/1.1/search/tweets.json?q=${encodedTerm}&result_type=popular`,
    { headers: {
      Authorization: `Bearer ${token}`,
    } },
  );
};
