import React from 'react';

const Button = ({children, props}) => {
    return (
        <button {...props} className='w-full bg-yellow-500 mb-5 h-10 hover:bg-red-500 text-white'>
            {children}
        </button>
    );
};

export default Button;