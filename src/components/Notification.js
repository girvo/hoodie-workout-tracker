import React from 'react'
import cx from 'classnames'

export default ({message, style = {}, type = 'notify'}) => (
    <div
        style={style}
        className={cx({
            'notification': true,
            'notification-warning': type === 'warning',
            'notification-error': type === 'error',
            'notification-success': type === 'success'
        })}>
        {message}
    </div>
)
