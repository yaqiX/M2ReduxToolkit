import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateString } from './redux/slices/stringSlice';

function App() {
  const string = useSelector((state) => state.string);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    dispatch(updateString(e.target.value));
  };

  return (
    <div>
      <h1>{string}</h1>
      <h1>Hello Test</h1>
      <input
        type="text"
        value={string}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default App;
