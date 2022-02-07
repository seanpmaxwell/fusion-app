// @flow
import React from 'react';

export default function Users() {
  const [state, setState] = useSetState(init());
  return (
    <div>
      <div>Use set state stuff</div>
      <div>Users Page</div>
      <div>Name: {state.name}</div>
      <div>Count: {state.count}</div>
      <button onClick={() => setState({count: state.count + 1})}>Hello</button>
    </div>
  );
}

function init() {
  return {
    name: 'Horse',
    count: 0,
  };
}

// https://www.vrdmn.com/2020/05/working-with-spfx-and-react-hooks.html
export const useSetState = initialState => {
  const [state, setState] = React.useState(initialState);
  //function which accepts a partial state to merge
  const setCustomState = React.useCallback(newPartialState => {
    try {
      setState(prevState => {
        return {...prevState, ...newPartialState};
      });
    } catch (error) {
      console.error(error);
    }
  }, []);
  return [state, setCustomState];
};

// Typescript version
/*
Function returns 
1) A state object 
2) A function which accepts a partial state to merge
*/

// export const useCustomState = <T extends object>(initialState: T): [T, (newPartialState: Partial<T>) => void] => {

//     const [state, setState] = useState<T>(initialState);

//     //function which accepts a partial state to merge
//     const setCustomState = useCallback((newPartialState: T) => {

//         try {
//             setState((prevState): T => {
//                 return { ...prevState, ...newPartialState };
//             });
//         } catch (error) {
//             console.error(error);
//         }

//     }, []);

//     return [state, setCustomState];
// };
