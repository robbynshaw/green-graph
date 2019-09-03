import React from 'react'
import { XYPlot, LineSeries, LineSeriesPoint, VerticalGridLines, HorizontalGridLines, XAxis, YAxis } from 'react-vis'
import Transaction from '../models/Transaction';
import { State } from '../store';
import { connect } from 'react-redux';
import 'react-vis/dist/style.css'

interface BillGraphProps {
    transactions : Array<Transaction>
    tags : Array<string>
}

interface Bill extends LineSeriesPoint {
}

const getBillGraph = function(trans : Array<Transaction>, tags : Array<string>): Array<Bill> {
    return [
      {x: 0, y: 8},
      {x: 1, y: 5},
      {x: 2, y: 4},
      {x: 3, y: 9},
      {x: 4, y: 1},
      {x: 5, y: 7},
      {x: 6, y: 6},
      {x: 7, y: 3},
      {x: 8, y: 2},
      {x: 9, y: 0}
    ]
}

// const getBills = function(trans : Array<Transaction>, tags : Array<string>): Array<Bill> {
//     return trans
//         .filter(t => {
//             for (let i = 0; i < tags.length; i++) {
//                 if (t.tags.includes(tags[i])) {
//                     return true
//                 }
//             }
//             return false
//         })
//         .reduce((prev, cur) => {
//             if (prev[cur.payees]
//         }, {})

// }

const BillGraph: React.FC<BillGraphProps> = (props : BillGraphProps) => {
    const { transactions, tags } = props
    const data = getBillGraph(transactions, tags)
  return (
      <XYPlot height={150} width={900}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <LineSeries data={data} />
      </XYPlot>
  )
}

const mapStateToProps = (state : State) => ({
    transactions: state.transactions.all,
})

export default connect(mapStateToProps)(BillGraph)