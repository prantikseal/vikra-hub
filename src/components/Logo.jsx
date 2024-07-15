import React from 'react';

const Logo = (props) => {
    return (
        <div className='relative flex items-center justify-start' {...props}>
            {/* center the circle */}
            <div className='absolute w-12 h-12 rounded-full bg-[#febda2] mr-4'></div>
            <span className='absolute ml-1 leading-5' id='harper-bold'>DopeContent</span>
        </div>
    );
}

export default Logo;
