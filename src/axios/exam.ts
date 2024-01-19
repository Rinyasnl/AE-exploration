
import axios, { AxiosResponse, AxiosError } from 'axios';

// Define the type for your API response data
interface UserData {
  userId: number;
  username: string;
}

// Make a GET request
axios.get<UserData>('https://jsonplaceholder.typicode.com/users/1')
  .then((response: AxiosResponse<UserData>) => {
    console.log('User Data:', response.data);
  })
  .catch((error: AxiosError) => {
    console.error('Error:', error.message);
  });
