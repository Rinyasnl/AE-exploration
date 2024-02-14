// App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';
// import Home from './Okta/home';
// import Login from './Okta/login';
// import ProtectedPage from './Okta/protected';

// const App = () => {
//   return (
//     <Router>
//       <ErrorBoundary>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/protected" element={<ProtectedPage />} />
//           <Route path="/user-profile" element={<UserProfile />} />
//         </Routes>
//       </ErrorBoundary>
//     </Router>
//   );
// };

// export default App;

// App.js
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { increment, decrement } from './redux/store';

// const App = () => {
//   const count = useSelector((state) => state.count);
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <h1>Counter App</h1>
//       <p>Count: {count}</p>
//       <button onClick={() => dispatch(increment())}>Increment</button>
//       <button onClick={() => dispatch(decrement())}>Decrement</button>
//     </div>
//   );
// };

// export default App;
// index.js (or App.js)
// import React from 'react';
// import { Provider } from 'react-redux';
// import store from './redux/store';
// import CounterComponent from './redux/counter';

// const App = () => {
//   return (
//     <Provider store={store}>
//       <CounterComponent />
//     </Provider>
//   );
// };

// export default App;
// App.js
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { increment, incrementAsync } from './redux-saga/actions';

// const App = () => {
//   const dispatch = useDispatch();
//   const count = useSelector((state) => state.count);

//   return (
//     <div>
//       <h1>Counter: {count}</h1>
//       <button onClick={() => dispatch(increment())}>Increment</button>
//       <button onClick={() => dispatch(incrementAsync())}>Increment Async</button>
//     </div>
//   );
// };

// export default App;
import React from 'react';
import './App.css';
import CounterDisplay from './react/context/counterdisplay';
import CounterButtons from './react/context/counterbutton';
import { MyProvider } from './react/context/myprovider';

function App() {
  return (
    <div className="App">
      <h1>Counter App</h1>
      <MyProvider>
        <CounterDisplay />
        <CounterButtons />
      </MyProvider>
    </div>
  );
}

export default App;



