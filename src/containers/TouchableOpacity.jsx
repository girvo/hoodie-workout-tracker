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
        // Clone our props and remove the children and className from them
        let props = Object.assign({}, this.props)
        delete props.children
        delete props.className

        return (
            <div
                {...this.props}
                onTouchStart={this.setDown.bind(this)}
                onTouchEnd={this.setUp.bind(this)}
                className={cx({
                    'highlight-down': this.state.down
                })}>
                {this.props.children}
            </div>
        )
    }
}

TouchableOpacity.propTypes = {
    children: PropTypes.element.isRequired,
}

export default TouchableOpacity
