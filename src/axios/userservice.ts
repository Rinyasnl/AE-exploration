// UserService.ts
import axios, { AxiosResponse } from 'axios';
import User from './user';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com/users';

class UserService {
  static async getUsers(): Promise<User[]> {
    try {
      const response: AxiosResponse<User[]> = await axios.get(API_BASE_URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error.message);
      throw error;
    }
  }

  static async addUser(newUser: User): Promise<User> {
    try {
      const response: AxiosResponse<User> = await axios.post(API_BASE_URL, newUser);
      return response.data;
    } catch (error) {
      console.error('Error adding user:', error.message);
      throw error;
    }
  }
}

export default UserService;
