import fetch from 'node-fetch';

interface UserData {
  name: string;
  email: string;
  username: string;
}

function isUserData(data: any): data is UserData {
  return (
    typeof data === 'object' &&
    data !== null &&
    'name' in data &&
    'email' in data &&
    'username' in data
  );
}

async function getUserData(): Promise<void> {
  try {
    
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');

    if (!response.ok) {
      throw new Error(`Failed to fetch user data. Status: ${response.status}`);
    }

    const jsonBody: unknown = await response.json();

    
    if (isUserData(jsonBody)) {
      
      const userData: UserData = jsonBody;

     
      console.log('User Information:');
      console.log(`Name: ${userData.name}`);
      console.log(`Email: ${userData.email}`);
      console.log(`Username: ${userData.username}`);
    } else {
      console.error('Received unexpected data format');
    }
  } catch (error) {
    const errorMessage = error as string;
    console.error('Error:', errorMessage);
  }
}


getUserData();
