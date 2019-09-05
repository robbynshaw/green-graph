import React from 'react'
import { BrowserRouter, Route, Redirect, RouteComponentProps, Switch } from 'react-router-dom'
import TransactionList from './components/TransactionList'
import CustomViewComponent from './components/CustomView'
import TabLink from './components/TabLink'
import AccountSummaryList from './components/AccountSummaryList';

interface ViewMatchParams {
    id : string
}

const ViewRouter = (props : RouteComponentProps<ViewMatchParams>) => {
    let { match: {params: { id } } } = props
    return (
        <CustomViewComponent id={id} />
    )
}

const Router: React.FC = () => {
  return (
      <BrowserRouter>
        <div className='tabs'>
            <ul>
                <TabLink title='Transactions' linkPath='/transactions/' />
                <TabLink title='Categories' linkPath='/categories/' />
                <TabLink title='Accounts' linkPath='/accounts/' />
                <TabLink title='Views' linkPath='/views/' />
            </ul>
        </div>
        <Switch>
            <Route path="/transactions/" component={TransactionList} />
            <Route path="/categories/" component={TransactionList} />
            <Route path="/accounts/" component={AccountSummaryList} />
            <Route path="/views/:id" component={ViewRouter} />
            <Redirect from="/" to="/transactions/" />
        </Switch>
      </BrowserRouter>
  )
}

export default Router