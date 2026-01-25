import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const IndexCardsPage: React.FC = () => {
  const [currentCard, setCurrentCard] = useState<number>(1);
  
  const cards = [
    {
      id: 1,
      title: "WHAT IS ARTIFICIAL INTELLIGENCE?",
      content: `
## ARTIFICIAL INTELLIGENCE: THE BASICS

Artificial Intelligence (AI) is a field of computer science focused on creating systems that can perform tasks that typically require human intelligence.

These systems learn from data and experience, improving their performance over time without being explicitly programmed for every situation they encounter.

AI encompasses various approaches including machine learning, deep learning, natural language processing, computer vision, and robotics—all working to simulate aspects of human cognition.

Modern AI excels at pattern recognition, prediction based on historical data, processing and generating language, and optimizing complex systems with many variables.

**Remember:** AI is a tool created by humans to extend human capabilities, not replace them.
      `
    },
    {
      id: 2,
      title: "WHAT AI IS NOT",
      content: `
## ARTIFICIAL INTELLIGENCE: COMMON MISCONCEPTIONS

AI is not sentient or conscious. Despite impressive capabilities, AI systems do not have self-awareness, emotions, desires, or understanding of their own existence.

AI is not a magical solution to all problems. It has specific strengths and limitations, requiring careful implementation and human oversight to be effective.

AI is not capable of true creativity or original thought. While it can combine and transform existing information in novel ways, it cannot generate truly original ideas disconnected from its training data.

AI is not inherently objective or unbiased. AI systems reflect the data they were trained on and the values of their creators, often perpetuating existing biases if not carefully designed.

**Remember:** AI is a reflection of human knowledge and values, not an independent intelligence with its own agenda.
      `
    },
    {
      id: 3,
      title: "HOW AI WORKS",
      content: `
## ARTIFICIAL INTELLIGENCE: THE PROCESS

AI systems work by processing large amounts of data to identify patterns and make predictions. This process has several key components:

**Data:** AI systems learn from examples—text, images, numbers, or other information that humans have collected and organized. The quality and diversity of this data directly impacts AI performance.

**Training:** During training, AI systems adjust their internal parameters to better recognize patterns in the data. This process is similar to how humans learn from experience, but follows mathematical principles.

**Inference:** Once trained, AI systems can apply what they've learned to new situations, making predictions or generating outputs based on previously unseen inputs.

**Feedback:** Many AI systems improve over time through feedback, either from humans or from measuring their own performance against specific goals.

**Remember:** AI doesn't "think" like humans do—it processes information mathematically to approximate human-like outputs.
      `
    },
    {
      id: 4,
      title: "AI LIMITATIONS",
      content: `
## ARTIFICIAL INTELLIGENCE: CURRENT LIMITATIONS

Despite impressive capabilities, AI systems have several important limitations:

**Context Understanding:** AI often struggles to understand context, nuance, and implicit information that humans grasp intuitively. It processes information literally rather than understanding deeper meanings.

**Common Sense:** AI lacks the common sense reasoning that humans develop through lived experience. It may miss obvious inconsistencies or make suggestions that don't make practical sense.

**Causality:** AI systems can identify correlations in data but often struggle to understand cause-and-effect relationships. They can tell you what happens together but not necessarily why.

**Adaptability:** While AI can excel in domains it was trained for, it typically cannot adapt to entirely new situations without additional training or human intervention.

**Remember:** The limitations of AI are why prompt engineering is so valuable—it helps bridge the gap between how humans and AI systems understand the world.
      `
    },
    {
      id: 5,
      title: "AI AND HUMANS TOGETHER",
      content: `
## ARTIFICIAL INTELLIGENCE: THE HUMAN-AI PARTNERSHIP

AI works best when paired with human intelligence, creating a complementary relationship:

**AI Strengths:** Processing vast amounts of data quickly, identifying patterns, performing repetitive tasks consistently, and operating without fatigue or distraction.

**Human Strengths:** Creativity, ethical judgment, common sense reasoning, emotional intelligence, and the ability to understand context and nuance in complex situations.

**Effective Collaboration:** The most powerful applications of AI involve humans and machines working together—humans providing direction, context, and oversight while AI handles scale, speed, and computational complexity.

**Communication Bridge:** Prompt engineering is the art and science of effectively communicating with AI systems, helping them understand human intent and produce useful results.

**Remember:** The goal of AI development isn't to replace human intelligence but to extend and enhance it, creating tools that help us solve problems more effectively together.
      `
    }
  ];

  const handlePrevCard = () => {
    setCurrentCard(prev => prev === 1 ? cards.length : prev - 1);
  };

  const handleNextCard = () => {
    setCurrentCard(prev => prev === cards.length ? 1 : prev + 1);
  };

  const card = cards.find(c => c.id === currentCard) || cards[0];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">AI Basics Index Cards</h1>
        <p className="text-gray-600">Learn the fundamentals of AI through these simple cards with Leonardo</p>
        <div className="w-24 h-1 bg-primary-500 mx-auto mt-4"></div>
      </div>

      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="bg-secondary-100 p-4 border-b border-secondary-200">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-secondary-800">Card {currentCard} of {cards.length}</h2>
            <div className="flex space-x-2">
              <button 
                onClick={handlePrevCard}
                className="p-2 rounded-full bg-white text-secondary-700 hover:bg-secondary-50 border border-secondary-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              <button 
                onClick={handleNextCard}
                className="p-2 rounded-full bg-white text-secondary-700 hover:bg-secondary-50 border border-secondary-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <div className="p-6 md:p-8">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-secondary-500 rounded-full flex items-center justify-center text-white mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-primary-800">{card.title}</h3>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: card.content.replace(/\n/g, '<br>') }} />
          </div>
          
          <div className="mt-6 text-right text-secondary-600 italic">
            <p>— Leonardo, your AI guide</p>
          </div>
        </div>
        
        <div className="bg-gray-50 px-6 py-4 flex justify-between items-center">
          <div className="text-sm text-gray-500">
            Flip through all cards to learn AI basics
          </div>
          <div className="flex space-x-1">
            {cards.map(c => (
              <button 
                key={c.id}
                onClick={() => setCurrentCard(c.id)}
                className={`w-3 h-3 rounded-full ${currentCard === c.id ? 'bg-secondary-500' : 'bg-gray-300'}`}
                aria-label={`Go to card ${c.id}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-between">
        <Link 
          to="/preface" 
          className="inline-flex items-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Previous: Preface
        </Link>
        <Link 
          to="/chapter1" 
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
        >
          Next: Chapter 1
          <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default IndexCardsPage;
