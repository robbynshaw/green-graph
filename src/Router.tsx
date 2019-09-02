import React from 'react'
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'
import TransactionList from './components/TransactionList'
import { State } from './store';
import { connect } from 'react-redux';
import { changeTab } from './reducers/view';

const Index: React.FC = () => {
    return (
        <Redirect to='/transactions/' />
    )
}

interface RouterProps {
    tab : string,
    changeTab: Function,
}

interface TabLinkProps {
    title: string
    linkPath : string
    curLocation : string
    changeTab: Function,
}

const TabLink : React.FC<TabLinkProps> = (props : TabLinkProps) => {
    const { title, linkPath, curLocation, changeTab } = props
    const actCls = curLocation === linkPath ? 'is-active' : ''

    return (
        <li className={actCls}>
            <Link onClick={(e) => changeTab(e.currentTarget.href)} to={props.linkPath}>{title}</Link>
        </li>
    )
}

const Router: React.FC<RouterProps> = (props : RouterProps) => {
  const { changeTab, tab } = props
  return (
      <BrowserRouter>
        <div className='tabs'>
            <ul>
                <TabLink title='Transactions' linkPath='/transactions/' curLocation={tab} changeTab={changeTab} />
                <TabLink title='Categories' linkPath='/categories/' curLocation={tab} changeTab={changeTab} />
            </ul>
        </div>
        <Route path='/' component={Index} />
        <Route path="/transactions/" component={TransactionList} />
        <Route path="/categories/" component={TransactionList} />
      </BrowserRouter>
  )
}

const mapDispatchToProps = (dispatch : Function) => ({
    changeTab: (name : string) => dispatch(changeTab(name)),
})

const mapStateToProps = (state : State) => ({
    tab : state.view.page
})

export default connect(mapStateToProps, mapDispatchToProps)(Router)