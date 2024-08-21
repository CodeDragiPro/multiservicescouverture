import React from 'react'

const Button = ({ name }) => {
    return (
        <div className='bg-secondary rounded-xl px-4 hover:text-black'>{name}</div>
    )
}

export default Button