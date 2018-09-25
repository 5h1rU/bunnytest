import axios from 'axios';

export async function getUserInfoFromTorre(username) {
  try {
    const response = await axios.get(`https://torre.bio/api/bios/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
