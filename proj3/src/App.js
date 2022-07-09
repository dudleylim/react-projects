import React from "react";
import Reviews from './components/data';
import Review from './components/Review';

console.log(Reviews);
function App() {
  return (
    <main>
      <section className="main-content">
        <h1>Title</h1>
        <Review />
      </section>
    </main>
  );
}

export default App;
