import React from 'react'

const Loading = (props) => (
    <div className='loading' {...props}>
        <div className='loader-bkg'>
            <div className='loader'>Loading...</div>
        </div>
    </div>
)

export default Loading
