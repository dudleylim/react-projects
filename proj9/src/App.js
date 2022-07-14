import React, {useState} from "react";
import SingleColor from './components/SingleColor';
import Values from 'values.js';

function App() {
  const [color, setColor] = useState('');
  const [list, setList] = useState([]);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      console.log(colors);
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  return (
    <main>
      <section className="main-content">
        <h1>Color Gen</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={color} onChange={(e) => {setColor(e.target.value)}}/>
          <button type="submit">generate</button>
        </form>

        <section className="main-color-list">
          {list.map((color, index) => {
            return <SingleColor key={index} {...color} index={index} />; // passes properties of color item as a prop
          })}
        </section>
      </section>
    </main>
  );
}

export default App;
