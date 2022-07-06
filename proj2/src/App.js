import React, {useState, useEffect} from "react";
import Loading from './components/Loading';
import Tours from './components/Tours';
const url = 'https://course-api.netlify.app/api/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  if (loading) {
    return (
      <main>
        <section className="main-container">
          <Loading />
        </section>
      </main>
    );
  }

  return (
    <>
    <main>

    </main>    
    </>
  );
}

export default App;
