import React, {
    Component,
    PropTypes,
} from 'react'

import cx from 'classnames'
import autoBind from 'react-autobind'

class TouchableOpacity extends Component
{
    state = {
        down: false
    }

    static propTypes = {
        children: PropTypes.element,
        activeOpacity: PropTypes.number,
    }

    constructor(props) {
        super(props)
        autoBind(this)
    }

    setDown() {
        this.setState({ down: true })
    }

    setUp(side) {
        this.setState({ down: false })
    }

    render() {
        // Grab the opacity or default to 0.5
        let {opacity = 0.5} = this.props

        let styles = {}
        if (this.state.down) {
            styles.opacity = opacity
        }

        return (
            <div
                {...this.props}
                onTouchStart={this.setDown}
                onTouchEnd={this.setUp}
                style={styles}>
                {this.props.children}
            </div>
        )
    }
}

export default TouchableOpacity
