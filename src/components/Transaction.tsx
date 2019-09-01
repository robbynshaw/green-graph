import React from 'react'
import moment from 'moment'
import Transaction from '../models/Transaction'

class TransactionProps {
    trans!: Transaction;
}

const negClass = function(amount: string) {
  return parseFloat(amount) < 0 ? ' negative' : ''
}

const TransactionComponent: React.FC<TransactionProps> = (props : TransactionProps) => {
  const { trans } = props
  return (
    <li className='columns'>
        <span className='column trans trans-row'>
            {moment(trans.date).format('YYYY-MM-DD')}
        </span>
        <span className='column trans trans-row'>
            {trans.description}
        </span>
        <span className={`column trans trans-row${negClass(trans.amount)}`}>
            ${trans.amount}
        </span>
        <span className={`column trans trans-row${negClass(trans.balance)}`}>
            ${trans.balance}
        </span>
        <span className='column trans trans-row'>
            {trans && trans.payees.join(', ')}
        </span>
    </li>
  )
}

export default TransactionComponent