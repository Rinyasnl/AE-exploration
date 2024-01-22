// index.tsx
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import store from './redux/store';
// import CounterComponent from './redux/counter';

// ReactDOM.render(
//   <Provider store={store}>
//     <CounterComponent />
//   </Provider>,
//   document.getElementById('root')
// );

// index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux-saga/store';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <App />
  </Provider>
);

