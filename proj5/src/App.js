import { useState } from 'react';
import List from './components/List';
// import Categories from './components/Categories';

function App() {
  const [toggleState, setToggleState] = useState('All');
  // console.log(toggleState);

  return (
    <main>
      <section className="main-content">
        <header className="main-header">
          <h1>Menu</h1>
          <div className="main-list-toggler">
            <button className='main-list-toggler-button' onClick={() => {setToggleState('All')}}>All</button>
            <button className='main-list-toggler-button' onClick={() => {setToggleState('Breakfast')}}>Breakfast</button>
            <button className='main-list-toggler-button' onClick={() => {setToggleState('Lunch')}}>Lunch</button>
            <button className='main-list-toggler-button' onClick={() => {setToggleState('Shakes')}}>Shakes</button>
        </div>
        </header>

        <article className="main-list-container">
          <List toggleState={toggleState}/>
        </article>
      </section>
    </main>
  );
}

export default App;
