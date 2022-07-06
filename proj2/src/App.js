import React, {useState, useEffect} from "react";
import Loading from './components/Loading';
import Tours from './components/Tours';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const getTours = async () => {
    try {
      const response = await fetch(url);
      if (!(response.status >= 200 && response.status <=299)) {
        throw new Error(response.statusText);
      }
      const tempTours = await response.json();
      setTours(tempTours);
      console.log(tempTours);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTours();
  }, []);

  if (loading) {
    return (
      <main>
        <section className="main-container">
          <Loading />
        </section>
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <section className="main-container">
          <h1>No tours left</h1>
          <button onClick={() => {getTours(); setLoading(true);}}>Refresh</button>
        </section>
      </main>
    );
  }

  return (
    <main>
        <section className="main-container">
          <Tours tours={tours} removeTour={removeTour}/>
        </section>
    </main>
  );
}

export default App;
