import React, {
    PropTypes,
    Component,
} from 'react'

import cx from 'classnames'
import TouchableOpacity from '../containers/TouchableOpacity.jsx'

// Pure sub-components
let Title = ({title}) => (<span className='title'>{title}</span>)

class Titlebar extends Component
{
    render() {
        const classes = cx({
            'titlebar': true,
        })

        return(
            <div className={classes}>
                <TouchableOpacity className='title-icon left'>
                    {this.props.left}
                </TouchableOpacity>

                <Title title={this.props.title} />

                <TouchableOpacity className='title-icon right'>
                    {this.props.right}
                </TouchableOpacity>
            </div>
        )
    }
}

Titlebar.propTypes = {
    title: React.PropTypes.string.isRequired,
    left: React.PropTypes.element,
    right: React.PropTypes.element,
}

export default Titlebar
