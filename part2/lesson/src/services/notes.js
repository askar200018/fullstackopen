import axios from 'axios';
const baseUrl = '/api/notes';

const getAll = () => {
  const request = axios.get(baseUrl);
  const nonExisting = {
    id: 10000,
    content: 'This note is not saved to server',
    date: '2019-05-30T17:30:31.098Z',
    important: true,
  };
  return request.then((response) => response.data.concat(nonExisting));
};

const create = (newNote) => {
  const request = axios.post(baseUrl, newNote);
  return request.then((response) => response.data);
};

const update = (id, changedNote) => {
  const request = axios.put(`${baseUrl}/${id}`, changedNote);
  return request.then((response) => response.data);
};

export default { getAll, create, update };
