import React from 'react';

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const RNDServicingPage = () => {
  return (
    <div>
      <header className="bg-blue-900 text-white p-4 flex justify-between items-center fixed w-full z-10">
        <h1 className="text-xl font-bold">RND Servicing</h1>
        <nav className="space-x-4">
          <button onClick={() => scrollTo('about')} className="hover:underline">About</button>
          <button onClick={() => scrollTo('services')} className="hover:underline">Services</button>
          <button onClick={() => scrollTo('contact')} className="hover:underline">Contact</button>
        </nav>
      </header>

      <main className="pt-20 space-y-20">
        <section id="about" className="p-8 bg-gray-100 min-h-screen">
          <h2 className="text-2xl font-semibold mb-4">About MVHR Ventilation</h2>
          <p>
            MVHR (Mechanical Ventilation with Heat Recovery) systems provide fresh filtered air into a building while recovering heat from the outgoing stale air. 
            This improves indoor air quality, reduces energy bills, and supports a healthier living environment.
          </p>
        </section>

        <section id="services" className="p-8 bg-white min-h-screen">
          <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>MVHR system installation</li>
            <li>Maintenance and servicing</li>
            <li>System balancing and airflow optimization</li>
            <li>Consultation and system upgrades</li>
          </ul>
        </section>

        <section id="contact" className="p-8 bg-gray-100 min-h-screen">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>Email us at <a href="mailto:info@rndservicing.com" className="text-blue-700 underline">info@rndservicing.com</a></p>
        </section>
      </main>
    </div>
  );
};

export default RNDServicingPage;