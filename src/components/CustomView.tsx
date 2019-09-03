import React from 'react'
import { connect } from 'react-redux';
import { State } from '../store';
import TabLink from './TabLink';
import Styled from 'styled-components'
import CustomView from '../models/CustomView';
import BillGraph from './BillGraph';
import TagSummary from './TagSummary';

interface CustomViewComponentProps {
    views : Array<CustomView>
    id : string
    getCurrent : Function
}

const Tabs = Styled.div`
    margin-top: -1.5em;
`

const CustomViewComponent: React.FC<CustomViewComponentProps> = (props : CustomViewComponentProps) => {
    const { views, getCurrent, id } = props
    const current : CustomView = getCurrent(id)
    const { tags } = current

  return (
    <>
    <Tabs className='tabs'>
        <ul>
            {views.map(v => (
                <TabLink key={v.id} title={v.name} linkPath={`/views/${v.id}`} />
            ))}
        </ul>
    </Tabs>
    <section className='section'>
        <div className='content'>
            <BillGraph tags={tags} />
            {tags.map(t => (
                <TagSummary key={t} greeting={t} />
            ))}
        </div>
    </section>
    </>
  )
}

const mapStateToProps = (state : State) => ({
    views: state.customViews.all,
    getCurrent: function(id : string) : CustomView {
        const cur = state.customViews.all.filter(v => v.id === id)
        if (cur && cur.length) {
            return cur[0]
        }
        return {
            id: "",
            name: "Please select a view",
            tags: [],
        }
    }
})

export default connect(mapStateToProps)(CustomViewComponent)