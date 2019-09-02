export interface JsonTransaction {
    key: number
    date: string
    description: string
    amount: string
    balance: string
}

interface Transaction extends JsonTransaction {
    payees: Array<string>
    tags: Array<string>
}

export default Transaction