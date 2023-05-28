import axios from '../../lib/axios';

export async function updateUser(id, username, profileImage) {
  return axios.post("/users/update", { id, username, profileImage });
}

export function getUserData(email) {
  return axios.get(`${USER_URL}/${email}`);
}