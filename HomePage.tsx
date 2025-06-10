import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">
          The Art & Science of Prompt Engineering
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A comprehensive guide for both technical and non-technical readers
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-8">
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="bg-secondary-100 p-6 rounded-lg shadow-lg max-w-md">
            <div className="text-center mb-4">
              <span className="inline-block bg-secondary-500 text-white p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </span>
            </div>
            <h3 className="text-xl font-semibold text-center text-secondary-800 mb-2">Meet Leonardo</h3>
            <p className="text-gray-600 text-center">
              Your friendly AI fox guide who will accompany you throughout this book, 
              helping you navigate the fascinating world of prompt engineering.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-2xl font-bold text-primary-700">Choose Your Path</h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-primary-50 p-4 rounded-lg border border-primary-200">
              <div className="flex items-center">
                <span className="text-primary-700 font-bold text-xl mr-2">🔷</span>
                <h3 className="font-semibold text-primary-800">Technical Path</h3>
              </div>
              <p className="mt-2 text-gray-600">
                For those comfortable with programming concepts, AI frameworks, and technical implementation details.
              </p>
            </div>

            <div className="bg-secondary-50 p-4 rounded-lg border border-secondary-200">
              <div className="flex items-center">
                <span className="text-secondary-700 font-bold text-xl mr-2">🔶</span>
                <h3 className="font-semibold text-secondary-800">Practical Path</h3>
              </div>
              <p className="mt-2 text-gray-600">
                For those who prefer plain language, real-world applications, and hands-on exercises without the technical jargon.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        <Link to="/preface" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-bold text-primary-700 mb-2">Preface</h3>
          <p className="text-gray-600">Understand the purpose and structure of this book on prompt engineering.</p>
          <div className="mt-4 text-primary-600 font-medium">Read More →</div>
        </Link>

        <Link to="/index-cards" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-bold text-primary-700 mb-2">AI Basics</h3>
          <p className="text-gray-600">Learn the fundamentals of AI through simple, clear index cards.</p>
          <div className="mt-4 text-primary-600 font-medium">Read More →</div>
        </Link>

        <Link to="/chapter1" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-bold text-primary-700 mb-2">Chapter 1: The Pitfalls of Poor Prompts</h3>
          <p className="text-gray-600">Explore common examples of insufficient prompts and why they fail.</p>
          <div className="mt-4 text-primary-600 font-medium">Read More →</div>
        </Link>

        <Link to="/examples" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-3">
          <h3 className="text-xl font-bold text-primary-700 mb-2">Practical Examples</h3>
          <p className="text-gray-600">See how prompt engineering applies to different domains including education, healthcare, and more.</p>
          <div className="mt-4 text-primary-600 font-medium">Read More →</div>
        </Link>
      </div>

      <div className="bg-primary-50 p-6 rounded-lg border border-primary-200 mt-12">
        <h2 className="text-2xl font-bold text-primary-800 mb-4">Why Prompt Engineering Matters</h2>
        <p className="text-gray-700">
          The ability to effectively communicate with AI systems is rapidly becoming as important as computer literacy was at the dawn of the internet age. 
          By developing this skill now, you're positioning yourself at the forefront of a transformation that will touch every industry and aspect of modern life.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
