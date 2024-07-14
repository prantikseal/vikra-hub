import React from 'react';

const Logo = () => {
    return (
        <div className='relative flex items-center justify-start'>
            <div className='absolute w-12 h-12 rounded-full bg-[#febda2] mr-4 opacity-60'></div>
            <span className='absolute ml-1 leading-5' id='harper-bold'>DopeContent</span>
        </div>
    );
}

export default Logo;
