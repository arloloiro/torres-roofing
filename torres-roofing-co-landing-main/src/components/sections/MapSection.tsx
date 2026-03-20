import React from "react";

export const MapSection = () => {
  return (
    <section id="location" className="w-full py-20 bg-[#0A0E18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Title in White and Red */}
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Our <span className="text-red-600">Location</span>
          </h2>

          {/* Additional text in English */}
          <div className="mt-6 max-w-2xl mx-auto space-y-4">
            <p className="text-lg text-gray-300">
              We are located in the heart of Houston, ready to handle all your
              residential and commercial roofing projects.
            </p>
            <p className="text-md text-red-500 font-semibold uppercase tracking-widest">
              Business Hours: Monday to Saturday - 8:00 AM to 6:00 PM
            </p>
            <p className="text-gray-400 font-medium">
              We have mobile units available for free estimates across the
              entire metropolitan area and surrounding neighborhoods.
            </p>
          </div>
        </div>

        {/* Map Container with Glow Effect */}
        <div className="w-full max-w-5xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(220,38,38,0.2)] border-2 border-red-600/30">
          <iframe
            title="Torres Roofing Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110948.45543166541!2d-95.4610815!3d29.7578057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20TX!5e0!3m2!1ses!2sus!4v1710887000000!5m2!1ses!2sus&hl=en"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
