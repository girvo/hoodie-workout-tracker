import React, { PropTypes } from 'react'

class Home extends React.Component
{
    componentDidMount() {
        this.props.actions.ui.setTitle('Welcome')
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
