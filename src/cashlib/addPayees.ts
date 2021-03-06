import Transaction, { JsonTransaction } from '../models/Transaction'
import mapData from '../data/maps.json'

const maps = mapData.map(m => {
    return { 
        ...m,
        patterns: m.tests.map(t => new RegExp(t, 'i')),
        tags: m.tags || []
    }
})

class PayeeMap {
    name!: string
    tests!: Array<string>
    patterns!: Array<RegExp>
    tags!: Array<string>
}

function tryAddPayee(map : PayeeMap, trans : Transaction) {
    for (let i = 0; i < map.patterns.length; i++) {
        if (map.patterns[i].test(trans.description)) {
            trans.payees.push(map.name)
            return
        }
    }
}

function addPayees(jTrans : JsonTransaction) {
    const trans : Transaction = {
        ...jTrans,
        payees: [],
        tags: [],
    }

    for (let i = 0; i < maps.length; i++) {
        let map = maps[i]
        tryAddPayee(map, trans)
    }

    return trans
}

export default addPayees