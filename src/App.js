import React from 'react';
import TypeAhead from './components/TypeAhead';

const App = () => {
  const suggestions = ['Apple', 'Banana', 'Orange', 'Pineapple', 'Mango'];

  return (
    <div>
      <h1>Type-Ahead Component Example</h1>
      <TypeAhead suggestions={suggestions} />
    </div>
  );
};

export default App;
