import React from 'react';
import { Link } from 'react-router-dom';

const ExamplesPage: React.FC = () => {
  const examples = [
    {
      id: 'algebra',
      title: 'High School Algebra',
      description: 'How to craft effective prompts for mathematics assistance, from basic to advanced algebra problems.',
      image: '🧮',
      color: 'bg-blue-50 border-blue-200',
      iconColor: 'bg-blue-100 text-blue-700',
      link: '/chapter1',
      linkText: 'View in Chapter 1'
    },
    {
      id: 'medical',
      title: 'Medical Research',
      description: 'How healthcare professionals can enhance their practice with well-crafted prompts for clinical research.',
      image: '🩺',
      color: 'bg-green-50 border-green-200',
      iconColor: 'bg-green-100 text-green-700',
      link: '/chapter1',
      linkText: 'View in Chapter 1'
    },
    {
      id: 'story',
      title: 'Creative Writing',
      description: 'Transforming vague story requests into detailed prompts that generate compelling narratives.',
      image: '📝',
      color: 'bg-purple-50 border-purple-200',
      iconColor: 'bg-purple-100 text-purple-700',
      link: '/chapter1',
      linkText: 'View in Chapter 1'
    },
    {
      id: 'marketing',
      title: 'Marketing Plans',
      description: 'Creating effective prompts for developing comprehensive marketing strategies with AI assistance.',
      image: '📊',
      color: 'bg-red-50 border-red-200',
      iconColor: 'bg-red-100 text-red-700',
      link: '/chapter1',
      linkText: 'View in Chapter 1'
    },
    {
      id: 'code',
      title: 'Programming Assistance',
      description: 'How to request code help with sufficient context for effective debugging and solutions.',
      image: '💻',
      color: 'bg-gray-50 border-gray-200',
      iconColor: 'bg-gray-100 text-gray-700',
      link: '/chapter1',
      linkText: 'View in Chapter 1'
    },
    {
      id: 'data',
      title: 'Data Analysis',
      description: 'Crafting prompts that provide the right context for meaningful data insights and visualizations.',
      image: '📈',
      color: 'bg-yellow-50 border-yellow-200',
      iconColor: 'bg-yellow-100 text-yellow-700',
      link: '/chapter1',
      linkText: 'View in Chapter 1'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">Practical Examples</h1>
        <p className="text-gray-600">Real-world applications of prompt engineering across different domains</p>
        <div className="w-24 h-1 bg-primary-500 mx-auto mt-4"></div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
        <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
          <div className="flex-shrink-0 w-24 h-24 bg-secondary-100 rounded-full flex items-center justify-center">
            <span className="text-4xl">🦊</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-primary-800 mb-2">Leonardo's Example Gallery</h2>
            <p className="text-gray-700">
              Welcome to our collection of practical examples showing how prompt engineering can be applied across different fields. 
              Each example demonstrates the transformation from vague, insufficient prompts to detailed, effective ones that produce 
              valuable results. Explore these examples to see how the principles we've discussed apply in real-world scenarios.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {examples.map(example => (
            <div key={example.id} className={`rounded-lg border p-6 ${example.color}`}>
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${example.iconColor} mr-4`}>
                  {example.image}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{example.title}</h3>
              </div>
              <p className="text-gray-700 mb-4">{example.description}</p>
              <Link 
                to={example.link} 
                className="inline-flex items-center text-primary-600 hover:text-primary-800"
              >
                {example.linkText}
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-primary-50 rounded-lg border border-primary-200 p-6 mb-8">
        <h2 className="text-xl font-bold text-primary-800 mb-4">Applying These Examples to Your Work</h2>
        <p className="text-gray-700 mb-4">
          The examples in this section demonstrate how prompt engineering principles can be applied across diverse domains. 
          When adapting these techniques to your own field, remember Leonardo's key advice:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-4 text-gray-700">
          <li>Always provide specific context relevant to your domain</li>
          <li>Clearly state your goals and expectations</li>
          <li>Include any constraints or preferences that matter to you</li>
          <li>Specify format requirements when they're important</li>
          <li>Consider building prompts iteratively, improving with each attempt</li>
        </ul>
      </div>

      <div className="mt-8 flex justify-between">
        <Link 
          to="/chapter1" 
          className="inline-flex items-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Previous: Chapter 1
        </Link>
        <Link 
          to="/" 
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
        >
          Back to Home
          <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ExamplesPage;
