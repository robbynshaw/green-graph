import React from 'react'
import Account from '../models/Account'
import getFormatter from "../cashlib/getFormatter";

interface AccountTotalProps {
    title: string
    accounts : Array<Account>
    className? : string
}

const AccountTotal: React.FC<AccountTotalProps> = (props : AccountTotalProps) => {
    const { accounts, title, className } = props
  return (
    <div className={`${className} level-item has-text-centered`}>
        <div>
            <p className='heading'>{title}</p>
            <p className={`${className} title`}>
                {getFormatter().format(accounts.reduce((p, c) => (p + (c.balance || 0)), 0))}
            </p>
        </div>
    </div>
  )
}

export default AccountTotal