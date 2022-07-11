import React, {useState, useEffect} from "react";
import Loading from "./components/Loading";

function App() {
  const url = 'https://course-api.com/react-tabs-project'
  // properties: company, dates, duties[], id, order, title
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
    console.log(newJobs);
  };

  const changeValue = (index) => {
    setValue(index);
  };

  useEffect(() => {fetchJobs()}, []); // at every starting render, fetch jobs

  if (loading) {
    return <Loading />;
  }

  return (
    <main>
      <section className="main-content">
        <h1>Experience</h1>
        
        <div className="main-job">
          <ul className="main-buttons">
            {jobs.map(({index, order, company}) => {
              return (<li><button key={index} className="main-button" onClick={() => {changeValue(order - 1)}}>{company}</button></li>);
            })}
          </ul>
          
          <article className="main-job-details">
            <h1>{jobs[value].title}</h1>
            <h3>{jobs[value].company}</h3>
            <p>{jobs[value].dates}</p>
            <ul className="main-job-duties">
              {jobs[value].duties.map((duty) => {
                return <li className="main-job-duty">{duty}</li>;
              })}
            </ul>
          </article>
        </div>
        
      </section>
    </main>
  );
}

export default App;
