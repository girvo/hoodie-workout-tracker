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
        let {opacity} = this.props
        opacity = opacity === null ? 0.5 : opacity

        let styles = {}
        if (this.state.down) {
            styles.opacity = 0.5
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
