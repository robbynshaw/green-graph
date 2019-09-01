import React from 'react';
import bills from '../data/results.json'
import Transaction from './Transaction'
import addPayees from '../cashlib/addPayees'

const TransactionList: React.FC = () => {
  let hideInputs = true

  return (
      <>
        {/* <div className='columns'>
            <div className='column'>
                <label className='checkbox'>
                    <input type='checkbox' checked={hideInputs} onChange={e => hideInputs = !hideInputs} />
                    Hide inputs
                </label>
            </div>
        </div> */}
        <ul>
            {bills
                .map(b => addPayees(b))
                .filter(b => !hideInputs || (b.payees.length === 0 && parseFloat(b.amount) < 0))
                .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
                .map(b => <Transaction key={b.key} trans={b} />)
            }
        </ul>
      </>
  )
}

export default TransactionList