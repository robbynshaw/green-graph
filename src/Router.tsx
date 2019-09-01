import React from 'react'
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'
import TransactionList from './components/TransactionList'

const Index: React.FC = () => {
    return (
        <Redirect to='/transactions/' />
    )
}

const Router: React.FC = () => {
  return (
      <BrowserRouter>
        <div className='tabs'>
            <ul>
                <li className='is-active'>
                    <Link to='/transactions/'>Transactions</Link>
                </li>
                <li>
                    <Link to='/Categories/'>Categories</Link>
                </li>
            </ul>
        </div>
        <Route path='/' component={Index} />
        <Route path="/transactions/" component={TransactionList} />
        <Route path="/categories/" component={TransactionList} />
      </BrowserRouter>
  )
}

export default Router