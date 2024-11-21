import React from 'react';

function Contact() {
  return (
    <section className="py-20 bg-gray-200" id="contact">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
        <p className="mt-4 text-gray-600">I’d love to connect! You can reach me via:</p>
        <div className="flex justify-center mt-6 space-x-4">
          <a href="mailto:musirakhann@gmail.com" className="text-blue-600">
            Email
          </a>
          <a href="https://github.com/Musira354" target="_blank" rel="noopener noreferrer" className="text-blue-600">
            GitHub
          </a>
          <a href="https://linkedin.com/in/musira-khan-153b65191" target="_blank" rel="noopener noreferrer" className="text-blue-600">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
