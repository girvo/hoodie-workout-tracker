import React, {
    Component,
    PropTypes,
} from 'react'

import cx from 'classnames'

class TouchableOpacity extends Component
{
    constructor(props) {
        super(props)
        this.state = { down: false }
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

        // Clone our props and remove the children and className from them
        let props = Object.assign({}, this.props)
        delete props.children

        let styles = {}
        if (this.state.down) {
            styles.opacity = 0.5
        }

        return (
            <div
                {...this.props}
                onTouchStart={this.setDown.bind(this)}
                onTouchEnd={this.setUp.bind(this)}
                style={styles}>
                {this.props.children}
            </div>
        )
    }
}

TouchableOpacity.propTypes = {
    children: PropTypes.element,
    activeOpacity: PropTypes.number,
}

export default TouchableOpacity
