import React from "react";
import Questions from './components/data'
import Question from "./components/Question.js";

function App() {
  return (
    <>
    <main>
      <section className="main-content">
        <ul className="main-list">
          {Questions.map(question => {
            return (<Question key={question.id} {...question} />);
          })}
        </ul>
      </section>
    </main>
    </>
  );
}

export default App;
