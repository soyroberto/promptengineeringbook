import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Chapter1Page: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('intro');

  const sections = [
    { id: 'intro', title: 'Introduction' },
    { id: 'example1', title: 'Example 1: "Write a story"' },
    { id: 'example2', title: 'Example 2: "Give me information"' },
    { id: 'example3', title: 'Example 3: "Help me with my project"' },
    { id: 'example4', title: 'Example 4: "Make this better"' },
    { id: 'example5', title: 'Example 5: "Analyze this data"' },
    { id: 'example6', title: 'Example 6: "Create a marketing plan"' },
    { id: 'example7', title: 'Example 7: "Fix this code"' },
    { id: 'algebra', title: 'High School Algebra Example' },
    { id: 'medical', title: 'Medical Research Example' },
    { id: 'why', title: 'Why Context Matters' },
    { id: 'turning', title: 'Turning Bad Prompts into Good Ones' },
    { id: 'summary', title: 'Chapter Summary' }
  ];

  const content: Record<string, React.ReactNode> = {
    intro: (
      <div>
        <h2 className="text-2xl font-bold text-primary-800 mb-4">THE PITFALLS OF POOR PROMPTS</h2>
        <h3 className="text-xl font-semibold text-primary-700 mb-4">WHEN LESS IS LESS: UNDERSTANDING INSUFFICIENT PROMPTS</h3>
        
        <div className="bg-secondary-50 p-4 rounded-lg border border-secondary-200 mb-6 flex items-start">
          <div className="flex-shrink-0 mr-4">
            <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center">
              <span className="text-secondary-700 text-xl">🦊</span>
            </div>
          </div>
          <div>
            <p className="italic text-gray-700">
              Leonardo, your friendly AI fox guide, will walk you through common examples of insufficient prompts and explain why they fail to produce useful results.
            </p>
          </div>
        </div>
        
        <p className="mb-4">
          Have you ever asked someone a question so vague that their answer couldn't possibly be helpful? Perhaps you've walked up to a stranger and simply said, "Directions?" without specifying where you want to go. Or maybe you've asked a colleague to "fix it" without explaining what "it" is or how it's broken.
        </p>
        
        <p className="mb-4">
          When we communicate with other humans, they often ask clarifying questions or use contextual clues to fill in the gaps. But when communicating with AI systems, the burden of clarity falls entirely on you, the prompt creator.
        </p>
        
        <p className="mb-4">
          In this chapter, Leonardo, your friendly AI fox guide, will walk you through common examples of insufficient prompts and explain why they fail to produce useful results. By understanding what makes a prompt ineffective, you'll be better equipped to craft prompts that get you the results you want.
        </p>
      </div>
    ),
    
    example1: (
      <div>
        <h2 className="text-2xl font-bold text-primary-800 mb-4">EXAMPLE 1: "WRITE A STORY"</h2>
        
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <p className="font-mono text-gray-800">Prompt: Write a story.</p>
        </div>
        
        <p className="mb-4">
          This three-word prompt seems straightforward enough. You want the AI to write a story. But let's examine what's missing:
        </p>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-lg font-bold text-primary-700 mb-2">Leonardo's Prompt Anatomy:</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-red-500 mr-2">❌</span>
              <span><strong>No genre specified</strong> - Should this be science fiction, romance, horror, or children's literature?</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">❌</span>
              <span><strong>No length indicated</strong> - Is a two-sentence story sufficient, or are you expecting a novel?</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">❌</span>
              <span><strong>No characters defined</strong> - Who should the story be about?</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">❌</span>
              <span><strong>No setting provided</strong> - Where and when should this story take place?</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">❌</span>
              <span><strong>No tone or style mentioned</strong> - Should it be humorous, serious, poetic, or straightforward?</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">❌</span>
              <span><strong>No plot elements suggested</strong> - What kind of conflict or resolution are you looking for?</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">❌</span>
              <span><strong>No audience specified</strong> - Is this for children, adults, or a specific demographic?</span>
            </li>
          </ul>
        </div>
        
        <p className="mb-4">
          When faced with such a vague prompt, an AI system must make assumptions about all these missing elements. The result? A generic, often bland story that likely doesn't match what you had in mind. Different AI systems might produce wildly different responses to this prompt, ranging from children's fables to complex narratives, depending on their training and default settings.
        </p>
        
        <div className="bg-secondary-50 p-4 rounded-lg border border-secondary-200 mb-6 flex items-start">
          <div className="flex-shrink-0 mr-4">
            <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center">
              <span className="text-secondary-700 text-xl">🦊</span>
            </div>
          </div>
          <div>
            <p className="font-semibold text-secondary-800 mb-1">Leonardo Says:</p>
            <p className="italic text-gray-700">
              "When you provide a prompt as open-ended as 'Write a story,' you're essentially asking the AI to play a guessing game. It's like walking into a restaurant and just saying 'Food, please!' You might get something edible, but it's unlikely to be what you were craving."
            </p>
          </div>
        </div>
      </div>
    ),
    
    algebra: (
      <div>
        <h2 className="text-2xl font-bold text-primary-800 mb-4">HIGH SCHOOL ALGEBRA PROMPT EXAMPLE</h2>
        <h3 className="text-xl font-semibold text-primary-700 mb-4">FROM BAD TO EXCELLENT: CRAFTING EFFECTIVE MATH HELP PROMPTS</h3>
        
        <p className="mb-4">
          This section demonstrates how to craft effective prompts for high school algebra assistance, showing the progression from insufficient to excellent prompts. This example is particularly valuable as mathematics requires precision and clarity, making it an ideal domain to illustrate prompt engineering principles.
        </p>
        
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <p className="font-mono text-gray-800">Prompt: Help me with algebra.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-lg font-bold text-primary-700 mb-2">Leonardo's Prompt Anatomy:</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-red-500 mr-2">❌</span>
              <span><strong>No specific problem provided</strong> - What algebra problem needs solving?</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">❌</span>
              <span><strong>No grade level or difficulty indicated</strong> - Is this basic or advanced high school algebra?</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">❌</span>
              <span><strong>No current understanding described</strong> - What concepts are already understood vs. challenging?</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">❌</span>
              <span><strong>No learning goal specified</strong> - Is the goal to solve a specific problem or understand a concept?</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">❌</span>
              <span><strong>No format preference mentioned</strong> - How should the solution be presented?</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">❌</span>
              <span><strong>No prior attempts shared</strong> - What approaches have already been tried?</span>
            </li>
          </ul>
        </div>
        
        <h3 className="text-xl font-semibold text-primary-700 mb-3">Progression of Improving Prompts</h3>
        
        <div className="mb-6">
          <h4 className="text-lg font-bold text-gray-800 mb-2">Slightly Better Prompt:</h4>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="font-mono text-gray-800">Help me solve this equation: 2x + 5 = 13</p>
          </div>
          <p className="mt-2 text-gray-600">
            This provides the specific problem but still lacks context about learning goals, difficulty level, and format preferences.
          </p>
        </div>
        
        <div className="mb-6">
          <h4 className="text-lg font-bold text-gray-800 mb-2">Good Prompt:</h4>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="font-mono text-gray-800">I'm a 9th-grade student learning how to solve linear equations. Can you help me solve 2x + 5 = 13 and explain each step of the process? I understand how to add and subtract from both sides but get confused when dealing with coefficients.</p>
          </div>
          <p className="mt-2 text-gray-600">
            This prompt provides educational context, a specific problem, request for step-by-step explanation, and current understanding level.
          </p>
        </div>
        
        <div className="mb-6">
          <h4 className="text-lg font-bold text-gray-800 mb-2">Excellent Prompt:</h4>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="font-mono text-gray-800 whitespace-pre-line">
              I'm a high school algebra teacher creating materials to help students progress from basic to advanced equation solving. Could you please:

              1. Solve the linear equation 2x + 5 = 13 with a detailed step-by-step explanation suitable for beginners
              2. Solve the system of equations (3x + 2y = 7, x - y = 1) with steps appropriate for intermediate students
              3. Solve the quadratic equation 2x² - 5x - 3 = 0 using both the quadratic formula and completing the square, explaining when each approach is preferable
              4. Provide 2-3 practice problems for each difficulty level with answers

              For each solution, please highlight common mistakes students might make and include visual representations where helpful. My goal is to create a comprehensive resource that shows the progression of algebraic concepts.
            </p>
          </div>
        </div>
        
        <div className="bg-secondary-50 p-4 rounded-lg border border-secondary-200 mb-6 flex items-start">
          <div className="flex-shrink-0 mr-4">
            <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center">
              <span className="text-secondary-700 text-xl">🦊</span>
            </div>
          </div>
          <div>
            <p className="font-semibold text-secondary-800 mb-1">Leonardo Says:</p>
            <p className="italic text-gray-700">
              "Notice how the excellent algebra prompt doesn't just ask for answers—it provides context about the purpose (creating teaching materials), specifies multiple difficulty levels, requests particular solution methods, and even asks for anticipation of common mistakes. This gives the AI a comprehensive framework to deliver truly useful content rather than just basic solutions. When asking for help with complex topics like mathematics, providing this level of detail ensures you get responses that match your actual educational needs."
            </p>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-primary-700 mb-3">Why This Example Matters</h3>
        
        <p className="mb-4">
          This algebra example demonstrates several key principles of effective prompt engineering:
        </p>
        
        <ol className="list-decimal list-inside space-y-2 pl-4 mb-6">
          <li><strong>Scaffolding complexity</strong> - The excellent prompt builds from basic to advanced problems, allowing for comprehensive coverage</li>
          <li><strong>Educational context</strong> - Specifying the learning environment helps tailor explanations to the appropriate level</li>
          <li><strong>Metacognitive elements</strong> - Requesting information about common mistakes shows how prompts can address not just content but learning process</li>
          <li><strong>Multiple representation requests</strong> - Asking for visual aids demonstrates how prompts can specify format preferences</li>
          <li><strong>Purpose clarity</strong> - Stating the goal of creating a comprehensive resource helps align the response with the end use case</li>
        </ol>
        
        <p className="mb-4">
          For both technical and non-technical readers, this example illustrates how even in domains that seem straightforward (solving math problems), thoughtful prompt engineering can dramatically improve the quality and usefulness of AI assistance.
        </p>
      </div>
    ),
    
    medical: (
      <div>
        <h2 className="text-2xl font-bold text-primary-800 mb-4">MEDICAL RESEARCH PROMPT EXAMPLE</h2>
        <h3 className="text-xl font-semibold text-primary-700 mb-4">FROM VAGUE TO VALUABLE: CRAFTING EFFECTIVE MEDICAL RESEARCH PROMPTS</h3>
        
        <p className="mb-4">
          This section demonstrates how healthcare professionals, particularly doctors who may not be technically savvy with AI systems, can craft effective prompts for medical research assistance. This example shows how well-designed prompts can enhance clinical practice by adding speed, depth, and insights to medical knowledge acquisition.
        </p>
        
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <p className="font-mono text-gray-800">Prompt: Find information about new diabetes treatments.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-lg font-bold text-primary-700 mb-2">Leonardo's Prompt Anatomy:</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-red-500 mr-2">❌</span>
              <span><strong>No patient context provided</strong> - What type of diabetes? What patient demographics?</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">❌</span>
              <span><strong>No current treatment specified</strong> - What treatments have already been tried or considered?</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">❌</span>
              <span><strong>No specific research goals indicated</strong> - Is this for general knowledge, a specific patient case, or research?</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">❌</span>
              <span><strong>No timeframe mentioned</strong> - How recent should the research be?</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">❌</span>
              <span><strong>No preferred sources specified</strong> - Are peer-reviewed journals preferred over clinical guidelines?</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">❌</span>
              <span><strong>No format requirements</strong> - How should the information be structured for clinical application?</span>
            </li>
          </ul>
        </div>
        
        <h3 className="text-xl font-semibold text-primary-700 mb-3">Progression of Improving Prompts</h3>
        
        <div className="mb-6">
          <h4 className="text-lg font-bold text-gray-800 mb-2">Slightly Better Prompt:</h4>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="font-mono text-gray-800">Find the latest research on Type 2 diabetes treatments published in the last two years.</p>
          </div>
          <p className="mt-2 text-gray-600">
            This provides the specific condition (Type 2 diabetes) and a timeframe (last two years) but still lacks clinical context and application goals.
          </p>
        </div>
        
        <div className="mb-6">
          <h4 className="text-lg font-bold text-gray-800 mb-2">Good Prompt:</h4>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="font-mono text-gray-800">I'm a primary care physician looking for recent clinical trials on Type 2 diabetes treatments for elderly patients with kidney complications. Please summarize findings from major studies published in the last 3 years, focusing on efficacy and safety profiles.</p>
          </div>
          <p className="mt-2 text-gray-600">
            This prompt provides professional context, specific condition, patient population, timeframe, content focus, and information needs.
          </p>
        </div>
        
        <div className="mb-6">
          <h4 className="text-lg font-bold text-gray-800 mb-2">Excellent Prompt:</h4>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="font-mono text-gray-800 whitespace-pre-line">
              I'm an endocrinologist treating a 68-year-old female patient with a 15-year history of Type 2 diabetes who has developed stage 2 chronic kidney disease. She's currently on metformin (1000mg daily) and glipizide (10mg daily), but her HbA1c remains at 8.2%. 
              
              Please provide:
              
              1. A summary of clinical research from the past 3 years on treatment adjustments for patients with similar profiles, particularly focusing on GLP-1 receptor agonists and SGLT2 inhibitors
              
              2. Key findings regarding medication safety in patients with kidney disease, including specific eGFR thresholds for dosage adjustments or contraindications
              
              3. A comparison of outcomes from recent studies examining combination therapies versus single-agent approaches for patients with inadequate glycemic control despite dual oral therapy
              
              4. Any recent consensus guidelines (ADA, EASD, KDIGO) updates specifically addressing diabetes management in the context of CKD
              
              Please format your response with clearly labeled sections, include relevant statistical data where available, and note any conflicting findings or ongoing debates in the literature. I'd appreciate citations to specific studies so I can review them in detail if needed.
            </p>
          </div>
        </div>
        
        <div className="bg-secondary-50 p-4 rounded-lg border border-secondary-200 mb-6 flex items-start">
          <div className="flex-shrink-0 mr-4">
            <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center">
              <span className="text-secondary-700 text-xl">🦊</span>
            </div>
          </div>
          <div>
            <p className="font-semibold text-secondary-800 mb-1">Leonardo Says:</p>
            <p className="italic text-gray-700">
              "Notice how the excellent medical prompt transforms a vague request into a powerful clinical decision support tool. By providing specific patient details, current treatment, and structured research questions, the doctor gives the AI the context needed to deliver truly relevant information. This approach saves valuable clinical time by filtering out irrelevant research and focusing only on studies applicable to the specific patient scenario. For busy healthcare professionals, this kind of prompt engineering isn't just about getting better information—it's about getting precisely targeted insights that can immediately inform patient care decisions."
            </p>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-primary-700 mb-3">Why This Example Matters</h3>
        
        <p className="mb-4">
          This medical research example demonstrates several key benefits of effective prompt engineering for healthcare professionals:
        </p>
        
        <ol className="list-decimal list-inside space-y-2 pl-4 mb-6">
          <li><strong>Time efficiency</strong> - By specifying exactly what information is needed, physicians avoid wading through irrelevant research</li>
          <li><strong>Clinical relevance</strong> - Patient-specific prompts ensure the information directly applies to real clinical scenarios</li>
          <li><strong>Depth with focus</strong> - Structured requests allow for comprehensive coverage of relevant topics without overwhelming breadth</li>
          <li><strong>Evidence integration</strong> - Requests for guideline updates alongside research findings help contextualize new evidence</li>
          <li><strong>Practical application</strong> - Format requests ensure information is presented in a way that facilitates clinical decision-making</li>
        </ol>
        
        <p className="mb-4">
          For non-technical healthcare professionals, this example illustrates how prompt engineering doesn't require technical expertise—it simply requires applying the same clinical specificity they use in medical documentation to their AI interactions. The result is AI assistance that functions more like a knowledgeable colleague than a generic search engine.
        </p>
      </div>
    ),
    
    why: (
      <div>
        <h2 className="text-2xl font-bold text-primary-800 mb-4">WHY CONTEXT MATTERS: THE IMPORTANCE OF DETAILED PROMPTS</h2>
        
        <div className="flex justify-center mb-6">
          <div className="bg-secondary-50 p-6 rounded-lg border border-secondary-200 flex items-center max-w-2xl">
            <div className="flex-shrink-0 mr-6">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center">
                <span className="text-secondary-700 text-2xl">🦊🔍</span>
              </div>
            </div>
            <div>
              <p className="italic text-gray-700">
                Leonardo the AI Fox holding a magnifying glass, examining prompt details
              </p>
            </div>
          </div>
        </div>
        
        <p className="mb-4">
          Now that we've seen examples of insufficient prompts, let's understand why providing context and detail is so crucial when working with AI systems:
        </p>
        
        <div className="space-y-6 mb-8">
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-primary-700 mb-2">1. AI Has No Inherent Context</h3>
            <p className="text-gray-700">
              Unlike humans, who bring a lifetime of experiences and common sense to every conversation, AI systems only have access to the information you explicitly provide in your prompt (plus their training data). They can't see your screen, don't know your personal history, and can't infer your intentions unless you state them clearly.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-primary-700 mb-2">2. Ambiguity Breeds Ambiguity</h3>
            <p className="text-gray-700">
              When your prompt contains ambiguous elements, the AI must make assumptions to fill in the gaps. These assumptions may not align with your expectations, leading to responses that miss the mark. The more precise your prompt, the more precise the response.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-primary-700 mb-2">3. AI Systems Are Powerful But Not Mind Readers</h3>
            <p className="text-gray-700">
              Modern AI systems can generate human-like text, solve complex problems, and create impressive content—but they can't read your mind. What seems obvious to you might not be obvious to the AI, especially when it comes to your specific goals and preferences.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-primary-700 mb-2">4. The Quality Correlation</h3>
            <p className="text-gray-700">
              There's a direct correlation between the quality of your prompt and the quality of the AI's response. A vague, one-line prompt might get you a technically correct but unhelpful response. A detailed, well-structured prompt is much more likely to produce the results you're looking for.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-primary-700 mb-2">5. Efficiency Through Clarity</h3>
            <p className="text-gray-700">
              While it might seem faster to write a short, vague prompt, this approach often leads to a cycle of clarifications and refinements that wastes time. Starting with a clear, detailed prompt is actually more efficient in the long run.
            </p>
          </div>
        </div>
        
        <div className="bg-secondary-50 p-4 rounded-lg border border-secondary-200 mb-6 flex items-start">
          <div className="flex-shrink-0 mr-4">
            <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center">
              <span className="text-secondary-700 text-xl">🦊</span>
            </div>
          </div>
          <div>
            <p className="font-semibold text-secondary-800 mb-1">Leonardo Says:</p>
            <p className="italic text-gray-700">
              "Think of prompt engineering as a form of translation—you're translating your human needs into a format that an AI system can understand and act upon effectively. The clearer and more complete your translation, the better the results."
            </p>
          </div>
        </div>
      </div>
    ),
    
    turning: (
      <div>
        <h2 className="text-2xl font-bold text-primary-800 mb-4">TURNING BAD PROMPTS INTO GOOD ONES</h2>
        
        <p className="mb-4">
          Let's revisit our first example and see how we can transform it from an insufficient prompt into an effective one:
        </p>
        
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-800 mb-2">Bad Prompt:</h3>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="font-mono text-gray-800">Write a story.</p>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-800 mb-2">Improved Prompt:</h3>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="font-mono text-gray-800">Write a 500-word science fiction short story about a botanist who discovers a plant with unexpected properties on a space station. The story should have a surprising twist ending and be written in a style similar to Ted Chiang. The target audience is adult science fiction enthusiasts.</p>
          </div>
        </div>
        
        <p className="mb-4">
          Notice how the improved prompt addresses all the missing elements we identified earlier:
        </p>
        
        <ul className="list-disc list-inside space-y-1 pl-4 mb-6">
          <li><strong>Genre:</strong> Science fiction</li>
          <li><strong>Length:</strong> 500 words</li>
          <li><strong>Characters:</strong> A botanist</li>
          <li><strong>Setting:</strong> A space station</li>
          <li><strong>Plot elements:</strong> Discovery of a plant with unexpected properties, twist ending</li>
          <li><strong>Style:</strong> Similar to Ted Chiang</li>
          <li><strong>Audience:</strong> Adult science fiction enthusiasts</li>
        </ul>
        
        <p className="mb-4">
          This level of detail gives the AI clear parameters to work within, dramatically increasing the chances that the resulting story will meet your expectations.
        </p>
      </div>
    ),
    
    summary: (
      <div>
        <h2 className="text-2xl font-bold text-primary-800 mb-4">CHAPTER SUMMARY</h2>
        
        <div className="flex justify-center mb-6">
          <div className="bg-secondary-50 p-6 rounded-lg border border-secondary-200 flex items-center max-w-2xl">
            <div className="flex-shrink-0 mr-6">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center">
                <span className="text-secondary-700 text-2xl">🦊👍</span>
              </div>
            </div>
            <div>
              <p className="italic text-gray-700">
                Leonardo the AI Fox giving a thumbs up next to a well-crafted prompt
              </p>
            </div>
          </div>
        </div>
        
        <p className="mb-4">
          In this chapter, we've explored common examples of insufficient prompts and why they fail to produce useful results. We've learned that:
        </p>
        
        <ul className="list-disc list-inside space-y-2 pl-4 mb-6">
          <li>Vague prompts force AI systems to make assumptions that may not align with your intentions</li>
          <li>Providing context, specificity, and detail is crucial for effective communication with AI</li>
          <li>There's a direct correlation between prompt quality and response quality</li>
          <li>Well-crafted prompts save time and lead to more satisfying results</li>
        </ul>
        
        <p className="mb-6">
          In the chapters that follow, Leonardo will guide you through the principles and techniques of effective prompt engineering, building on this foundation to help you master the art and science of communicating with AI systems.
        </p>
        
        <div className="bg-secondary-50 p-4 rounded-lg border border-secondary-200 mb-8 flex items-start">
          <div className="flex-shrink-0 mr-4">
            <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center">
              <span className="text-secondary-700 text-xl">🦊</span>
            </div>
          </div>
          <div>
            <p className="font-semibold text-secondary-800 mb-1">Leonardo Says:</p>
            <p className="italic text-gray-700">
              "Remember, when it comes to prompt engineering, clarity is kindness—both to the AI and to yourself. The more clearly you communicate your needs, the better the AI can serve them."
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-primary-50 p-5 rounded-lg border border-primary-200">
            <h3 className="text-lg font-bold text-primary-800 mb-2">TECHNICAL PATH PREVIEW</h3>
            <p className="text-gray-700">
              In the next chapter, we'll dive into the computational linguistics behind prompt interpretation, exploring how different AI architectures process and respond to prompts at a technical level.
            </p>
          </div>
          
          <div className="bg-secondary-50 p-5 rounded-lg border border-secondary-200">
            <h3 className="text-lg font-bold text-secondary-800 mb-2">PRACTICAL PATH PREVIEW</h3>
            <p className="text-gray-700">
              In the next chapter, we'll explore a simple framework for constructing effective prompts, with practical templates you can adapt for various use cases.
            </p>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">EXERCISES</h3>
          <ol className="list-decimal list-inside space-y-2 pl-4">
            <li>Take one of the bad prompts from this chapter and transform it into a detailed, effective prompt.</li>
            <li>Identify three prompts you've used with AI systems in the past that could be improved, and rewrite them with greater specificity.</li>
            <li>Practice explaining to a friend or colleague why "Write a story" is an insufficient prompt, and what elements would make it more effective.</li>
          </ol>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4">KEY TERMS</h3>
          <dl className="space-y-4">
            <div>
              <dt className="font-bold text-gray-800">Prompt Engineering</dt>
              <dd className="pl-4 text-gray-700">The practice of designing and refining inputs to AI systems to achieve desired outputs.</dd>
            </div>
            <div>
              <dt className="font-bold text-gray-800">Context</dt>
              <dd className="pl-4 text-gray-700">Background information and specifications that help the AI understand your requirements.</dd>
            </div>
            <div>
              <dt className="font-bold text-gray-800">Ambiguity</dt>
              <dd className="pl-4 text-gray-700">Lack of clarity that forces the AI to make assumptions about your intentions.</dd>
            </div>
            <div>
              <dt className="font-bold text-gray-800">Specificity</dt>
              <dd className="pl-4 text-gray-700">The level of detail and precision in your prompt.</dd>
            </div>
          </dl>
        </div>
      </div>
    )
  };
  
  // Add more content sections as needed

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">Chapter 1: The Pitfalls of Poor Prompts</h1>
        <p className="text-gray-600">Understanding why insufficient prompts fail and how to improve them</p>
        <div className="w-24 h-1 bg-primary-500 mx-auto mt-4"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Navigation */}
        <div className="md:w-1/4">
          <div className="bg-white rounded-lg shadow-md p-4 sticky top-4">
            <h2 className="text-lg font-bold text-primary-700 mb-4">Chapter Contents</h2>
            <nav>
              <ul className="space-y-2">
                {sections.map(section => (
                  <li key={section.id}>
                    <button
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                        activeSection === section.id
                          ? 'bg-primary-100 text-primary-800'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:w-3/4">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            {content[activeSection] || content.intro}
          </div>

          <div className="mt-8 flex justify-between">
            <Link 
              to="/index-cards" 
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Previous: AI Basics
            </Link>
            <Link 
              to="/examples" 
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
            >
              Next: Examples
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chapter1Page;
