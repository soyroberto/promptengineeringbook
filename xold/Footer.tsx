import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Prompt Engineering</h3>
            <p className="text-primary-200 mt-1">The Art & Science of Communicating with AI</p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="mb-4 md:mb-0">
              <h4 className="font-semibold mb-2">Navigation</h4>
              <ul className="space-y-1">
                <li><a href="/" className="text-primary-200 hover:text-white">Home</a></li>
                <li><a href="/preface" className="text-primary-200 hover:text-white">Preface</a></li>
                <li><a href="/index-cards" className="text-primary-200 hover:text-white">AI Basics</a></li>
                <li><a href="/chapter1" className="text-primary-200 hover:text-white">Chapter 1</a></li>
                <li><a href="/examples" className="text-primary-200 hover:text-white">Examples</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">About</h4>
              <p className="text-primary-200 max-w-xs">
                This book is designed for both technical and non-technical readers,
                with Leonardo as your guide through the world of prompt engineering.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-600 text-center text-sm text-primary-300">
          <p>© {new Date().getFullYear()} Prompt Engineering Book. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
