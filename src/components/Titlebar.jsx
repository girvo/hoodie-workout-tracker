import React, {
    PropTypes,
    Component,
} from 'react'
import cx from 'classnames'

class Titlebar extends Component
{
    constructor(props) {
        super(props)

        this.state = {
            leftDown: false,
            rightDown: false,
        }

        this.setDown = this.setDown.bind(this)
        this.setUp = this.setUp.bind(this)
    }

    setDown(side) {
        if (side === 'left') {
            this.setState({ leftDown: true })
        }

        if (side === 'right') {
            this.setState({ rightDown: true })
        }
    }

    setUp(side) {
        if (side === 'left') {
            this.setState({ leftDown: false })
        }

        if (side === 'right') {
            this.setState({ rightDown: false })
        }
    }

    render() {
        const classes = cx({
            'titlebar': true,
        })

        return(
            <div className={classes}>
                <div
                    onTouchStart={() => this.setDown('left')}
                    onTouchEnd={() => this.setUp('left')}
                    className={cx({
                        'title-icon': true,
                        'title-icon-down': this.state.leftDown,
                        'left': true,
                    })}>
                    {this.props.left}
                </div>
                <span className='title'>{this.props.title}</span>
                <div
                    onTouchStart={() => this.setDown('left')}
                    onTouchEnd={() => this.setUp('left')}
                    className={cx({
                        'title-icon': true,
                        'title-icon-down': this.state.rightDown,
                        'right': true,
                    })}>
                    {this.props.right}
                </div>
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
