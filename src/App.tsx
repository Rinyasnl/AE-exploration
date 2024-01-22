// App.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataRequest } from './redux-saga/actions';
import { RootState } from './redux-saga/reducers'; // Add this import

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state: RootState) => state.data);

  useEffect(() => {
    // Dispatch the fetchDataRequest action when the component mounts
    dispatch(fetchDataRequest());
  }, [dispatch]);

  return (
    <div>
      <h1>Data:</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
