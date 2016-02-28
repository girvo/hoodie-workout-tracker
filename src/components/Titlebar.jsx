import React, {
    PropTypes,
    Component,
} from 'react'

import cx from 'classnames'
import {observer} from 'mobx-react'

import UIStore from '../stores/UIStore'
import TouchableOpacity from '../containers/TouchableOpacity.jsx'

// Pure sub-components
let Title = ({title}) => <span className='title'>{title}</span>

@observer
class Titlebar extends Component
{
    static defaultProps = {
        ui: UIStore
    }

    static propTypes = {
        title: React.PropTypes.string.isRequired,
        left: React.PropTypes.element,
        right: React.PropTypes.element,
        ui: React.PropTypes.object,
    }

    render() {
        const classes = cx({
            'titlebar': true,
        })

        return(
            <div className={classes}>
                <TouchableOpacity className='title-icon left'>
                    {this.props.left}
                </TouchableOpacity>

                <Title title={this.props.ui.pageTitle} />

                <TouchableOpacity className='title-icon right'>
                    {this.props.right}
                </TouchableOpacity>
            </div>
        )
    }
}

export default Titlebar
