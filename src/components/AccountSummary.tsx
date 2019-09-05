import React from 'react'
import Account, { AccountType } from '../models/Account';
import getFormatter from '../cashlib/getFormatter'

interface AccountSummaryProps {
    title : AccountType
    accounts : Array<Account>
}

interface KeyValueProps {
  keyName : string
  displayValue : string
}

const KeyValue: React.FC<KeyValueProps> = (props : KeyValueProps) => {
  const { keyName, displayValue } = props
  return (
    <div className='columns'>
      <div className='column'>
        <strong>{keyName}:</strong>
      </div>
      <div className='column'>
        {displayValue}
      </div>
    </div>
  )
}

const AccountDetails: React.FC<Account> = (props : Account) => {
  const { name, balance, payment, autopay, notes } = props
  return (
    <div className='box'>
      {autopay && (<span className='tag is-primary is-pulled-right'>Autopay</span>)}
      <h4 className='title is-4'>{name}</h4>
      <div className='content'>
        <div className='columns'>
          <div className='column'>
            <KeyValue keyName='Balance' displayValue={getFormatter().format(balance)} />
            {payment && (<KeyValue keyName='Payment' displayValue={getFormatter().format(payment)} />)}
            {notes && notes.length && (
              <article className="message is-info">
                <div className="message-header">
                  <p>Notes</p>
                </div>
                <div className="message-body">
                  <ul>
                    {notes.map(n => (
                      <li>{n}</li>
                    ))}
                  </ul>
                </div>
              </article>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const AccountSummary: React.FC<AccountSummaryProps> = (props : AccountSummaryProps) => {
    const { accounts, title } = props
    const payment = accounts.reduce((p, c) => (p + (c.payment || 0)), 0)
  return (
    <div className='column'>
      {payment > 0 && (
        <div className='control is-pulled-right'>
          <div className='tags has-addons'>
            <span className='tag is-dark'>payments</span>
            <span className='tag is-info'>{getFormatter().format(payment)}</span>
          </div>
        </div>
      )}
      <h3 className='title is-3 has-text-info'>{title}</h3>
      {accounts
        .sort((a, b) => {
          if (a.name < b.name) {
            return -1
          } else if (a.name > b.name) {
            return 1
          }
          return 0
        })
        .map(a => (<AccountDetails key={a.name} {...a} />))}
    </div>
  )
}

export default AccountSummary