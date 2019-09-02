import React from 'react';
import { connect } from 'react-redux'
import TransactionComponent from './Transaction'
import Transaction from '../models/Transaction'
import { State } from '../store'
import { toggleUncategorized } from '../reducers/transaction'

export interface TransactionListProps {
    bills : Array<Transaction>
    hideUncategorized: boolean
    toggleUncategorized: Function
}

const TransactionList: React.FC<TransactionListProps> = (props: TransactionListProps) => {
  const { bills, hideUncategorized, toggleUncategorized } = props

  return (
      <section className='content'>
        <div className='columns'>
            <div className='column'>
                <label className='checkbox'>
                    <input type='checkbox' checked={hideUncategorized} onChange={() => toggleUncategorized()}/>
                    Hide inputs
                </label>
            </div>
        </div>
        <ul>
            {bills
                .filter(b => !hideUncategorized || (b.payees.length === 0 && parseFloat(b.amount) < 0))
                .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
                .map(b => <TransactionComponent key={b.key} trans={b} />)
            }
        </ul>
      </section>
  )
}

const mapDispatchToProps = (dispatch : Function) => ({
    toggleUncategorized: () => dispatch(toggleUncategorized()),
})

const mapStateToProps = (state : State) => ({
    bills: state.transactions.all,
    hideUncategorized: state.transactions.view.hideUncategorized
})

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList)