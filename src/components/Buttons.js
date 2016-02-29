import React from 'react'
import FaAngleLeft from 'react-icons/lib/fa/angle-left'
import FaBars from 'react-icons/lib/fa/bars'

const styles = {
    backButton: {
        width: 25,
        height: '100%',
        paddingTop: 8,
        paddingBottom: 10,
    },

    menuButton: {
        paddingLeft: 15,
        paddingRight: 10,
        width: 20,
        height: '100%',
    },
}

// Core button component
let Button = ({icon, label, onTouchEnd, onTouchStart, onClick}) => {
    return (
        <div
            className='title-icon-content'
            onTouchEnd={onTouchEnd}
            onTouchStart={onTouchStart}
            onClick={onClick}>
            {icon}
            {label ? <span className='title-icon-label'>{label}</span> : <span></span>}
        </div>
    )
}

// Button definitions
let BackButton = (props) => <Button {...props} icon={<FaAngleLeft style={styles.backButton} />} label='Back' />
let MenuButton = (props) => <Button {...props} icon={<FaBars style={styles.menuButton} />} />

export {
    BackButton,
    MenuButton,
}
