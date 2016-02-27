import React from 'react'
import FaAngleLeft from 'react-icons/lib/fa/angle-left'

const styles = {
    backButton: {
        width: 25,
        height: '100%',
        paddingTop: 8,
        paddingBottom: 10,
    },
}

let Button = ({icon, label}) => {
    return (
        <div className='title-icon-content'>
            {icon}
            <span className='title-icon-label'>{label}</span>
        </div>
    )
}

let BackButton = (props) => (
    <Button
        icon={<FaAngleLeft style={styles.backButton} />}
        label='Back'
    />
)

export {
    BackButton
}
