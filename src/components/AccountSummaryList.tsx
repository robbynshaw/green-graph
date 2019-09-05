import React from 'react'
import { connect } from 'react-redux';
import { State } from '../store';
import Styled from 'styled-components'
import Account, { AccountType } from '../models/Account';
import AccountSummary from './AccountSummary';
import AccountTotal from './AccountTotal'

interface AccountSummaryListProps {
    accounts : Array<Account>
}

const Content = Styled.div`
  margin: 1.5em;
`

const ContentHr = Styled.hr`
  margin: 2.5em 0 3.5em 0;
`

const AccountSummaryList: React.FC<AccountSummaryListProps> = (props : AccountSummaryListProps) => {
    const { accounts } = props
    let types = [ AccountType.Checking, AccountType.Loan, AccountType.CreditCard ]

  return (
    <Content className='content'>
      <nav className='level'>
        <AccountTotal className='has-text-primary' title='Net Worth' accounts={accounts} />
        {types.map(t => (<AccountTotal key={t} title={t} accounts={accounts.filter(a => !a.closed && a.type === t)} />))}
     </nav>
     <ContentHr />
      <div className='columns'>
        {types
          .sort()
          .map(t => (<AccountSummary key={t} title={t} accounts={accounts.filter(a => !a.closed && a.type === t)} />))}
      </div>
    </Content>
  )
}

const mapStateToProps = (state : State) => ({
    accounts: state.accounts.all
})

export default connect(mapStateToProps)(AccountSummaryList)