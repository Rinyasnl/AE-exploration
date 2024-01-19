// UserList.tsx
import React, { useEffect, useState } from 'react';
import User from './user';
import UserService from "./userservice";

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [newUserName, setNewUserName] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchedUsers = await UserService.getUsers();
        setUsers(fetchedUsers);
      } catch (error) {
        // Handle error
      }
    };

    fetchUsers();
  }, []);

  const handleAddUser = async () => {
    try {
      const newUser: User = { id: users.length + 1, name: newUserName, email: 'example@example.com' };
      const addedUser = await UserService.addUser(newUser);
      setUsers([...users, addedUser]);
      setNewUserName('');
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <div>
        <input type="text" value={newUserName} onChange={(e) => setNewUserName(e.target.value)} />
        <button onClick={handleAddUser}>Add User</button>
      </div>
    </div>
  );
};

export default UserList;
