import { useState } from "react";
import Lorems from './components/data';

function App() {
  const [count, setCount] = useState(0); 
  const [displayLorems, setDisplayLorems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(count);

    let temp = []
    let miniCount = 0;

    // get count value
    for (let i = 0; i < count; i++) {
      if (miniCount >= Lorems.length) {
        miniCount -= Lorems.length;
      }
      temp = [...temp, Lorems[miniCount]];
      miniCount += 1;
    }

    setDisplayLorems(temp);
  };

  return (
    <main>
      <section className="main-content">
        <h1>Loremipsumgenerator</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="lorem-count">Paragraphs</label>
          <input type="number" name="lorem-count" id="lorem-count" value={count} onChange={(e) => {setCount(e.target.value)}}/>
          <button type="submit">generate</button>
        </form>

        {displayLorems.map((text) => {
          return <p>{text}</p>
        })}

      </section>
    </main>
  );
}

export default App;