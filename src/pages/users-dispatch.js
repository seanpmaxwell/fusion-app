// @flow
import React from 'react';

export default function Users() {
  const [stated, dispatch] = React.useReducer(reducer, init());
  return (
    <div>
      <div>Dispatch Stuff</div>
      <div>Users Page</div>
      <div>Name: {stated.name}</div>
      <div>Count: {stated.count}</div>
      <button onClick={() => dispatch({type: 'CHANGE_COUNTER', payload: 5})}>
        Hello
      </button>
    </div>
  );
}

function init() {
  return {
    name: 'Horse',
    count: 0,
  };
}

function reducer(state, action) {
  return {
    ...state,
    count: action.payload,
  };
}
