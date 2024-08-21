import React from 'react'

const Button = ({ name }) => {
    return (
        <div className='bg-secondary rounded-xl px-4 py-2 text-white hover:text-black inline'>{name}</div>
    )
}

export default Button