import React from 'react'
import { Link } from 'react-router-dom';
import { changeTab } from '../reducers/view';
import { connect } from 'react-redux';
import { State } from '../store';

interface TabLinkProps {
    title: string
    linkPath : string
    curLocation : string
    changeTab: Function
    exact?: boolean
}

const TabLink : React.FC<TabLinkProps> = (props : TabLinkProps) => {
    const { title, linkPath, curLocation, changeTab, exact } = props
    let actCls = ''
    if (exact) {
        actCls = curLocation === linkPath ? 'is-active' : ''
    } else {
        actCls = curLocation.startsWith(linkPath) ? 'is-active' : ''
    }

    return (
        <li className={actCls}>
            <Link onClick={(e) => changeTab(e.currentTarget.href)} to={props.linkPath}>{title}</Link>
        </li>
    )
}

const mapDispatchToProps = (dispatch : Function) => ({
    changeTab: (name : string) => dispatch(changeTab(name)),
})

const mapStateToProps = (state : State) => ({
    curLocation : state.view.page
})

export default connect(mapStateToProps, mapDispatchToProps)(TabLink)