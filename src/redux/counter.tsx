// CounterComponent.tsx
import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from './store';
import { increment, decrement } from './actions';

const mapState = (state: RootState) => ({
  count: state.counter.count,
});

const mapDispatch = {
  increment,
  decrement,
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

const CounterComponent: React.FC<PropsFromRedux> = ({ count, increment, decrement }) => {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default connector(CounterComponent);
