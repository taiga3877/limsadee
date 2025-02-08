import React from 'react';
import Section from '../../Components/Navbar/Section/Section';
import Prices from '../Price/Price';

function Five() {
    return (
        
        <div className="bg-[#667DB6] py-10 px-4">
            <br />
            <Prices/>
            <br />
            <br />
            <div className="max-w-[1440px] w-full mx-auto flex flex-wrap items-center justify-between">
                
                {/* Левая часть */}
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                    <h1 className="text-white text-3xl font-bold mb-4 md:w-[400px]">
                        Order a website for your business now, and get a small gift from us – 10% off!
                    </h1>
                    <h2 className="text-white text-lg font-medium">
                        Satisfying every customer is our highest goal – <span className="text-[#FFD700]">LIMSA</span>
                    </h2>
                </div>

                {/* Правая часть (Форма) */}
                <div className="w-full md:w-1/2 bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-white text-xl font-semibold mb-4">Leave your details</h2>
                    <form className="space-y-3">
                        <input 
                            type="text" 
                            placeholder="Your name" 
                            className="w-full p-3 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-[#1C4DCB]" 
                        />
                        <input 
                            type="number" 
                            placeholder="+998 901234567" 
                            className="w-full p-3 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-[#1C4DCB]" 
                        />
                        <textarea 
                            placeholder="Your message" 
                            className="w-full p-3 rounded bg-gray-700 text-white outline-none h-24 focus:ring-2 focus:ring-[#1C4DCB]" 
                        ></textarea>
                        <button 
                            type="submit" 
                            className="w-full bg-[#1C4DCB] p-3 rounded text-white font-semibold hover:bg-[#143B8A] transition">
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Five;
