import React from 'react';
import TransactionList from './components/TransactionList'

const App: React.FC = () => {
  return (
    <div className="App">
      <section className='hero is-primary' >
        <div className='hero-body'>
          <div className='container'>
            <h1 className='title'>Transactions</h1>
          </div>
        </div>
      </section>
      <section className='content'>
        <TransactionList />
      </section>
    </div>
  );
}

export default App;
