import React from 'react';
import notebook from './image.png';

function One() {
    return (
        <div className='bg-[#667DB6] py-10'>
            <br />
            <br />
            <br />
            <div className='container mx-auto flex flex-col md:flex-row items-center justify-between text-white px-6 md:px-12 lg:px-20 xl:px-40'>
                <div className='md:w-1/2 text-center md:text-left'>
                    <h1 className='text-3xl font-bold mb-4'>Perfect 'IT' solutions to grow your business!</h1>
                    <p className='text-lg mb-6'>Entrust your project to experts with more than 10 years of experience and achieve high success in a short time.</p>
                    <button className='bg-[#1C4DCB] text-white px-6 py-2 rounded-2xl'>Contact</button>
                </div>
                <div className='md:w-1/2 flex justify-center mt-6 md:mt-0'>
                    <img src={notebook} alt="Notebook" className='max-w-full h-auto' />
                </div>
            </div>
        </div>
    );
}

export default One;