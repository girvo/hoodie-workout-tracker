import React, { PropTypes } from 'react'
import TouchableOpacity from '../containers/TouchableOpacity'
import cx from 'classnames'

// Pure sub-components
let Title = ({title}) => <span className='title'>{title}</span>

class Titlebar extends React.Component
{
    static defaultProps = {
        title: 'Workout Tracker'
    }

    static propTypes = {
        title: React.PropTypes.string.isRequired,
        left: React.PropTypes.element,
        right: React.PropTypes.element,
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

                <Title title={this.props.title} />

                <TouchableOpacity className='title-icon right'>
                    {this.props.right}
                </TouchableOpacity>
            </div>
        )
    }
}

export default Titlebar
