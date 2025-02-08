import React from 'react';

function Prices() {
    const services = [
        {
            title: "LANDING PAGE",
            description: "Another name for a one-page site is a Landing Page. The page is easy to use and introduces the customer to the information they need.",
            features: ["Domain UZ", "Protection 24/7", "Duration 3 days", "Number of pages 1"],
        },
        {
            title: "SITE CARD",
            description: "It is the 'business card' of the company on the Internet. The site is to introduce the company's services or products to the people visiting the business page.",
            features: ["Domain UZ", "Protection 24/7", "Duration 3-7 days", "Number of pages 2-4"],
        },
        {
            title: "Exclusive",
            description: "This website is created based on your order. You can order any website you want.",
            features: ["Domain UZ", "Protection 24/7", "Number of languages - Desired", "High Design Level"],
        },
    ];

    return (
        <section className="text-white bg-[#667DB6] py-10" aria-labelledby="prices-title">
            <div className="container mx-auto text-center flex-1 items-center justify-center">
                <button className='hidden md:block bg-[#1C4DCB] text-white w-[180px] h-[40px] rounded-2xl transition-all hover:bg-gray-800'>
                <p className="text-lg text-white font-bold">Our prices</p>
                </button>
                <h2 id="prices-title" className="text-3xl font-bold">Our affordable websites for you</h2>

                <div className="mt-6 space-y-6">
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col md:flex-row items-center justify-between bg-gray-800 rounded-lg shadow-lg p-6 hover:bg-gray-700 transition">
                            <div className="flex-1 text-left md:text-center">
                                <h3 className="text-xl font-bold text-white">{service.title}</h3>
                                <p className="text-gray-300 mt-2">{service.description}</p>
                            </div>
                            
                            <ul className="flex-1 text-left md:text-right text-gray-400 space-y-1">
                                {service.features.map((feature, i) => (
                                    <li key={i}>✔ {feature}</li>
                                ))}
                            </ul>

                            <div className="flex flex-col items-center space-y-2">
                                <span className="text-white">Negotiate</span>
                                <button className="bg-[#1C4DCB] px-4 py-2 rounded-lg hover:bg-[#667DB6] ">Place Order</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Prices;
