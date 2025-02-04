import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from "lucide-react";
import png from './image.png';
import png1 from './image copy.png';
import Marquee from 'react-fast-marquee';

const faqs = [
  {
    question: "Why are the prices so cheap?",
    answer: "Our prices are really cheap compared to the quality. The reason is that we don't have excess labor in our web studio, so we don't have excess costs. That's why we keep our prices low compared to others.",
  },
  {
    question: "Will I be able to edit the site myself in the future?",
    answer: "Yes, of course, you will be given access and instructions to the content management system (adminka). Adminka has a convenient interface, is intuitive and does not require specific knowledge.",
  },
  {
    question: "Will you continue to support the site after it’s finished?",
    answer: "Once we've finished your site, we'll keep it running for free, 24/7 for one year. After one year, it's $10/month.",
  },
];

function Two() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="bg-[#1C4DCB] text-white">
      <div className="max-w-7xl mx-auto p-6 flex flex-col md:flex-row items-center justify-between">
        {/* Images */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-around w-full md:w-[800px]">
          <img src={png} alt="Image 1" className="w-[250px] md:w-[314px] h-auto p-2 md:p-4" />
          <img src={png1} alt="Image 2" className="w-[250px] md:w-[314px] h-auto p-2 md:p-4" />
        </div>

        {/* FAQ Section */}
        <div className="mt-6 md:mt-0 w-full md:w-[700px] space-y-2">
          <h1 className="text-2xl font-bold">Frequently Asked Questions</h1>
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-400 rounded-lg overflow-hidden">
              <button
                className="flex justify-between items-center w-full p-4 text-left text-white font-semibold"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                {openIndex === index ? <ChevronDown /> : <ChevronRight />}
              </button>
              {openIndex === index && (
                <div className="p-4 w-full text-white">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Section */}
      <div className="overflow-hidden">
        <Marquee speed={250} gradientWidth={100} direction="right">
          <span className="mx-10 text-xl md:text-2xl">WEBSITE BUILDING SERVICE</span>
          <span className="mx-10 text-xl md:text-2xl">/</span>
          <span className="mx-10 text-xl md:text-2xl">MOBILE APP</span>
          <span className="mx-10 text-xl md:text-2xl">/</span>
          <span className="mx-10 text-xl md:text-2xl">AUTOMATION SYSTEMS</span>
          <span className="mx-10 text-xl md:text-2xl">/</span>
          <span className="mx-10 text-xl md:text-2xl">DIGITAL SOLUTIONS</span>
        </Marquee>
      </div>
    </div>
  );
}

export default Two;
