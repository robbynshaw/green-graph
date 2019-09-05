export enum AccountType {
    CreditCard = "Credit Card",
    Checking = "Checking",
    Loan = "Loan",
}

export interface Card {
    owner: string
    number : string
    csv : string
    provider : string
}

export default interface Account {
    name : string
    balance : number
    date : Date
    limit? : number
    number : string
    apr : number
    type : AccountType
    bank : string
    payment? : number
    autopay? : boolean
    cards : Array<Card>
    notes? : Array<string>
    closed? : boolean
}