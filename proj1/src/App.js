import data from './data';
import List from './List';
import {useState} from 'react';

function App() {
  const [stuff, setStuff] = useState(data);
  const resetList = () => {
      setStuff([]);
  };

  return (
    <main className="main-container">
      <h1>{stuff.length} Birthdays today</h1>
      <List stuff={stuff} />
      <button onClick={() => {resetList()}} className="main-reset-button">Reset</button>
    </main>
  );
}

export default App;
