import React from 'react';

const Button = ({ name, animation }) => {
    return (
        <button
            className={`bg-teal-700 rounded-xl px-4 py-2 text-white hover:text-black ${animation}`}
        >
            {name}
        </button>
    );
};

export default Button;