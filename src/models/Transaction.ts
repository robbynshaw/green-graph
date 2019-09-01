interface Transaction {
    key: number
    date: string
    description: string
    amount: string
    balance: string
    payees: Array<string>
}

export default Transaction