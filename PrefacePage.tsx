import React, { useEffect, useState } from 'react';
import MarkdownRenderer from '../components/MarkdownRenderer';

const PrefacePage: React.FC = () => {
  const [prefaceContent, setPrefaceContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Load the preface content from the content directory
    fetch('/preface.md')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to load preface content');
        }
        return response.text();
      })
      .then(text => {
        setPrefaceContent(text);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading preface:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">Preface</h1>
        <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <MarkdownRenderer content={prefaceContent} />
        </div>
      )}

      <div className="mt-8 flex justify-between">
        <div></div>
        <a 
          href="/index-cards" 
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
        >
          Next: AI Basics
          <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default PrefacePage;
