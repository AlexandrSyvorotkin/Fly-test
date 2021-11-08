import React from 'react';

const Button = ({children, props}) => {
    return (
        <button {...props} className='w-full bg-yellow-400 mb-5 h-10 hover:bg-red-500'>
            {children}
        </button>
    );
};

export default Button;