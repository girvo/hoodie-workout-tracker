import React, {
    PropTypes,
    Component,
} from 'react'

import {observer} from 'mobx-react'
import UIStore from '../stores/UIStore'

@observer
class Home extends Component
{
    static defaultProps = {
        ui: UIStore
    }

    render() {
        return (
            <div>
                <p>Workout Tracker</p>
            </div>
        )
    }
}

export default Home
