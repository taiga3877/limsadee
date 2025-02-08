import React from 'react';
import { motion } from "framer-motion";
import notebook from './image.png';

function One() {
    // Рандомный выбор направления анимации (сверху или снизу)
    const getRandomDirection = () => (Math.random() > 0.5 ? -100 : 100);

    return (
        <div className='bg-[#667DB6] py-10'>
            <br />
            <br />
            <br />
            <br />
            <div className='container mx-auto flex flex-col md:flex-row items-center justify-between text-white px-6 md:px-12 lg:px-20 xl:px-40'>
                <motion.div 
                    className='md:w-1/2 text-center md:text-left'
                    initial={{ opacity: 0, y: getRandomDirection() }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <h1 className='text-3xl font-bold mb-4'>Perfect 'IT' solutions to grow your business!</h1>
                    <p className='text-lg mb-6'>Entrust your project to experts with more than 10 years of experience and achieve high success in a short time.</p>
                    <motion.button 
                        className='bg-[#1C4DCB] text-white px-6 py-2 rounded-2xl'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Contact
                    </motion.button>
                </motion.div>
                <motion.div 
                    className='md:w-1/2 flex justify-center mt-6 md:mt-0'
                    initial={{ opacity: 0, y: getRandomDirection() }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    <img src={notebook} alt='Notebook' className='max-w-full h-auto' />
                </motion.div>
            </div>
        </div>
    );
}

export default One;
