import React from 'react';
import { FaLinkedin, FaInstagram, FaTelegram } from 'react-icons/fa';
import { MdLocationOn, MdPhone, MdAccessTime, MdPublic } from 'react-icons/md';

function Section() {
  return (
    <section className="bg-gray-900 text-white py-10 px-5">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Contacts</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contacts List */}
          <ul className="space-y-6">
            <li className="flex items-center gap-4">
              <MdLocationOn className="w-6 h-6 text-gray-400" />
              <div>
                <h3 className="text-lg font-semibold">Address</h3>
                <p className="text-gray-400">Tashkent city, Yunusabad district</p>
              </div>
            </li>

            <li className="flex items-center gap-4">
              <MdPhone className="w-6 h-6 text-gray-400" />
              <div>
                <h3 className="text-lg font-semibold">Phone Number</h3>
                <a href="tel:+998935138833" className="text-gray-400 hover:text-white transition">
                  +998 (33) 258 73 58
                </a>
              </div>
            </li>

            <li className="flex items-center gap-4">
              <MdAccessTime className="w-6 h-6 text-gray-400" />
              <div>
                <h3 className="text-lg font-semibold">Working hours</h3>
                <p className="text-gray-400">9:00 - 18:00 Monday-Saturday</p>
              </div>
            </li>

            <li className="flex items-center gap-4">
              <MdPublic className="w-6 h-6 text-gray-400" />
              <div>
                <h3 className="text-lg font-semibold">Social networks</h3>
                <div className="flex space-x-3 mt-1">
                  <a href="https://www.linkedin.com/company/limsa-2021/" className="hover:text-blue-400 transition">
                    <FaLinkedin className="text-xl" />
                  </a>
                  <a href="https://www.instagram.com/limsa_uz" className="hover:text-pink-400 transition">
                    <FaInstagram className="text-xl" />
                  </a>
                  <a href="https://t.me/the_rustambek" className="hover:text-blue-400 transition">
                    <FaTelegram className="text-xl" />
                  </a>
                </div>
              </div>
            </li>
          </ul>

          {/* Map */}
          <div>
            <iframe
              className="w-full h-64 rounded-lg shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.65547130854!2d69.28311021090116!3d41.33810459893217!2m3!1f0!2f0!3f0!2m3!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b5f1f5cfd49%3A0x110bc2a5ed9856b7!2sLIMSA!5e0!3m2!1sru!2s!4v1730879135357!5m2!1sru!2s"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
