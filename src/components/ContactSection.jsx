import React from 'react';
import macro from '../assets/macro.png';

function ContactSection() {
  return (
    <div>
      {/* Contact Section positioned lower with added margin */}
      <div className="bg-black text-white py-4 text-center mt-10">
        <p className="text-lg">Have any concerns and questions?</p>
        <button className="mt-2 bg-red-700 text-white px-4 py-2 text-base rounded transition-colors duration-300 hover:bg-orange-400">
          Contact Us
        </button>
      </div>

      {/* Background Image Section with Text Overlay */}
      <div
        className="relative h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${macro})` }}
      >
        <div className="absolute left-32 bg-black bg-opacity-70 p-8 rounded text-white max-w-4xl text-left shadow-lg" style={{ bottom: '0' }}>
          <h1 className="text-4xl font-extrabold mb-4 leading-tight">
            Be a Responsible Gun Owner!
          </h1>
          <p className="text-lg font-semibold leading-relaxed">
            Being a responsible gun owner means prioritizing safety, understanding the laws, and respecting the power that comes with firearm ownership. It involves proper training, secure storage, and regular maintenance to ensure that firearms are only accessible to authorized users. A responsible gun owner stays informed on best practices, respects others' rights and concerns, and is committed to using firearms legally and ethically. This approach helps promote a culture of safety and responsibility within the community.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
