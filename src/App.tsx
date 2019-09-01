import React from 'react';
import Router from './Router'

const App: React.FC = () => {
  return (
    <div className="App">
      <section className='hero is-primary' >
        <div className='hero-body'>
          <div className='container'>
            <h1 className='title'>The Green Graph</h1>
          </div>
        </div>
      </section>
      <Router />
    </div>
  );
}

export default App;
