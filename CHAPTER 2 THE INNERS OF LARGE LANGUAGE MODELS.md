# CHAPTER 2: THE INNERS OF LARGE LANGUAGE MODELS

![Chapter Introduction](https://raw.githubusercontent.com/soyroberto/promptengineeringbook/main/images/chapter2/01_introduction_black_box.png)

## Introduction

Welcome to the inner workings of Large Language Models! In this chapter, Trufa will guide Paula (and you) through the fascinating world of how LLMs actually work. We'll demystify the "black box" and explore the fundamental concepts that make these powerful AI systems tick.

Understanding LLM internals isn't just academic curiosity—it directly impacts how you craft better prompts. When you know how tokens work, how text is encoded, and how models process information, you can write prompts that work *with* the system rather than against it.

---

## The Evolution of Large Language Models

![LLM Evolution Timeline](https://raw.githubusercontent.com/soyroberto/promptengineeringbook/main/images/chapter2/02_llm_evolution_timeline.png)

Large Language Models didn't appear overnight. They're the result of decades of research and innovation in natural language processing and machine learning.

### The Journey from Simple to Sophisticated

The evolution of language models represents one of the most remarkable progressions in artificial intelligence. Early statistical models could barely predict the next word in a sentence. Neural networks brought pattern recognition capabilities. The transformer architecture revolutionized how models understand context. And modern LLMs like GPT, Claude, and Manus can engage in complex reasoning, creative writing, and technical problem-solving.

**Key Milestones:**
- **Early Statistical Models (1990s-2000s):** N-gram models that predicted words based on frequency
- **Neural Networks (2010s):** RNNs and LSTMs that could capture longer-term dependencies
- **Transformer Architecture (2017):** The breakthrough "Attention is All You Need" paper
- **Modern LLMs (2020s):** GPT-3, GPT-4, Claude, Manus, and other large-scale models

---

## Understanding Tokens: The Building Blocks of LLMs

Tokens are the fundamental units that LLMs process. Think of them as the "words" that the model actually sees—but they're not always whole words.

### Practical Path: Tokens as Building Blocks

![Tokens - Practical Explanation](https://raw.githubusercontent.com/soyroberto/promptengineeringbook/main/images/chapter2/03_tokens_practical.png)

Imagine you're building with LEGO blocks. Some blocks are big (common words like "the" or "hello"), and some are small (parts of words like "un-", "-ing"). LLMs work the same way—they break text into manageable pieces called tokens.

**Why This Matters for Prompting:**
- Token limits determine how much context you can provide
- Efficient prompts use fewer tokens
- Understanding tokenization helps you structure longer prompts

### Technical Path: Tokenization Mathematics

![Tokens - Technical Explanation](https://raw.githubusercontent.com/soyroberto/promptengineeringbook/main/images/chapter2/04_tokens_technical.png)

Tokenization is the process of converting a sequence of characters into a sequence of token IDs that the model can process mathematically.

**Formal Definition:**
Given a vocabulary V = {t₁, t₂, ..., tₙ}, tokenization is a function:
```
tokenize: String → [TokenID]
```

Each token ID corresponds to a specific entry in the model's vocabulary, which is then mapped to a high-dimensional embedding vector for processing.

---

## Encoding: How Machines Understand Text

Encoding is the bridge between human language and machine-readable numbers. It's how "Hello, world!" becomes something a neural network can process.

### Practical Path: Text to Numbers

![Encoding - Practical Explanation](https://raw.githubusercontent.com/soyroberto/promptengineeringbook/main/images/chapter2/05_encoding_practical.png)

Think of encoding like translating a book into a secret code. Each word or word-part gets assigned a unique number. The LLM then works with these numbers, performing mathematical operations to understand meaning and generate responses.

**The Pipeline:**
1. **Text Input:** "CAT"
2. **Tokenization:** Break into tokens
3. **Encoding:** Convert to numbers [67, 65, 84]
4. **Processing:** Model works with these numbers
5. **Decoding:** Convert back to text for output

### Technical Path: Encoding Algorithms

![Encoding - Technical Explanation](https://raw.githubusercontent.com/soyroberto/promptengineeringbook/main/images/chapter2/06_encoding_technical.png)

Modern LLMs use sophisticated subword tokenization algorithms to balance vocabulary size with coverage.

**Encoding Process:**
1. **Character Encoding (UTF-8):** Convert characters to bytes
2. **Tokenization:** Apply subword algorithm (BPE, WordPiece, SentencePiece)
3. **Vocabulary Mapping:** Map tokens to IDs
4. **Embedding:** Convert IDs to dense vectors

**Mathematical Representation:**
```
V = vocabulary set
merge(a, b) → ab (creates new token)
```

The encoding process ensures that even rare or unseen words can be represented by combining subword units.

---

## Byte-Pair Encoding in Action

Byte-Pair Encoding (BPE) is one of the most popular tokenization algorithms. Let's see it in action with a real Spanish poem.

### Practical Path: BPE Step-by-Step

![BPE - Practical Demonstration](https://raw.githubusercontent.com/soyroberto/promptengineeringbook/main/images/chapter2/07_bpe_practical.png)

BPE works like creating shortcuts for common patterns. If you see "qu" + "e" appearing together frequently in Spanish text, BPE merges them into a single token "que".

**Example with Spanish:**
- **Step 1:** Start with individual characters: 'q', 'u', 'e'
- **Step 2:** Find most frequent pair: 'q' + 'u' → 'qu'
- **Step 3:** Merge again: 'qu' + 'e' → 'que'
- **Result:** "que" is now a single token!

This is why common Spanish words like "que", "del", "por" become single tokens, making processing more efficient.

### Technical Path: BPE Algorithm

![BPE - Technical Algorithm](https://raw.githubusercontent.com/soyroberto/promptengineeringbook/main/images/chapter2/08_bpe_technical.png)

**BPE Algorithm:**
```
1. Initialize vocabulary V with all characters
2. Count all adjacent character pairs in corpus
3. Find most frequent pair (a, b)
4. Merge pair: a + b → ab
5. Add 'ab' to vocabulary V
6. Repeat until desired vocabulary size
```

**Pseudocode:**
```python
while |V| < target_size:
    pair = most_frequent(text)
    merge(pair)
    V.add(merged_token)
```

**Spanish Poem Analysis:**
Using "A DULCINEA DEL TOBOSO" by Cervantes, we can observe:
- Character frequency: 'e': 27, 'a': 28, ' ': 71
- Common pairs: 'qu': 15, 'de': 12, 'el': 10
- Merged tokens: 'que', 'del', 'por', 'más'

---

## Why BPE Matters (Even If You Don't Understand It)

![Why BPE Matters](https://raw.githubusercontent.com/soyroberto/promptengineeringbook/main/images/chapter2/09_why_bpe_matters.png)

You don't need to implement BPE yourself, but understanding why it exists helps you write better prompts.

**Key Benefits:**

1. **Efficiency:** Common words are single tokens, saving space
2. **Multilingual Support:** Works across languages (Spanish, English, Chinese, etc.)
3. **Vocabulary Coverage:** Can represent any word, even rare ones
4. **Handles Unknown Words:** Breaks them into known subword pieces

**Impact on Your Prompts:**
- Shorter, common words use fewer tokens
- Technical jargon may use more tokens (broken into subwords)
- Multilingual prompts work seamlessly
- You can fit more context within token limits

---

## Inside the Black Box: Architecture Maps

Now let's peek inside the actual architecture of modern LLMs.

### Manus Architecture

![Manus LLM Architecture](https://raw.githubusercontent.com/soyroberto/promptengineeringbook/main/images/chapter2/10_architecture_manus.png)

Manus, like other modern LLMs, is built on the transformer architecture with several key components:

**Core Components:**
- **Input Layer:** Receives tokenized text with cloud-optimized preprocessing
- **Embedding Layer:** Converts tokens to high-dimensional vectors
- **Transformer Blocks:** Multiple stacked layers of attention and feed-forward networks
- **Multi-Head Attention:** Allows the model to focus on different parts of the input simultaneously
- **Feed-Forward Networks:** Process information through neural pathways
- **Output Layer:** Generates probability distributions over the vocabulary

Manus is optimized for cloud deployment with efficient attention mechanisms and scalable architecture.

### Comparing Architectures: Manus, ChatGPT, and Claude

![Architecture Comparison](https://raw.githubusercontent.com/soyroberto/promptengineeringbook/main/images/chapter2/11_architecture_comparison.png)

While all modern LLMs share the transformer foundation, each has unique architectural choices:

**Similarities (✓):**
- Transformer-based architecture
- Multi-head attention mechanisms
- Layer normalization
- Feed-forward networks
- Token-based processing

**Differences (★):**
- **Manus:** Cloud-optimized with distributed attention, emphasis on scalability
- **ChatGPT:** OpenAI's GPT architecture with reinforcement learning from human feedback (RLHF)
- **Claude:** Anthropic's constitutional AI approach with enhanced safety layers

Understanding these differences helps you choose the right model for your task and adjust your prompting strategy accordingly.

---

## Chapter Summary

![Chapter Summary](https://raw.githubusercontent.com/soyroberto/promptengineeringbook/main/images/chapter2/12_chapter_summary.png)

Congratulations! You've successfully explored the inner workings of Large Language Models. The mysterious black box is now transparent, revealing the elegant mechanisms that power modern AI.

**Key Takeaways:**

1. **LLMs evolved from simple statistical models to sophisticated transformer-based architectures** over several decades of research and innovation.

2. **Tokens are the fundamental units of processing**—understanding them helps you write more efficient prompts and manage context limits.

3. **Encoding bridges human language and machine mathematics**—text becomes numbers, gets processed, and converts back to text.

4. **Byte-Pair Encoding (BPE) balances efficiency and coverage**—it creates shortcuts for common patterns while handling rare words through subword composition.

5. **Modern LLMs share transformer architecture but differ in implementation**—Manus, ChatGPT, and Claude each have unique optimizations and design choices.

**How This Knowledge Improves Your Prompting:**
- Write token-efficient prompts that fit more context
- Understand why certain phrasings work better than others
- Anticipate how models will process your input
- Choose the right model for your specific task
- Debug issues by understanding the underlying mechanics

**Preview of Next Chapter:**
Now that you understand *how* LLMs work internally, Chapter 3 will teach you *how to communicate effectively* with them through the art of contextual prompting.

---

## EXERCISES

![Trufa's Challenge](https://raw.githubusercontent.com/soyroberto/promptengineeringbook/main/images/chapter2/13_trufa_exercises.png)

Ready to test your understanding? Trufa challenges you to apply what you've learned!

### Exercise 1: Token Counting
Estimate how many tokens these prompts would use:
1. "Write a story about a cat."
2. "Explain quantum entanglement in simple terms."
3. "¿Cómo funciona la inteligencia artificial?"

### Exercise 2: BPE Prediction
Given these common words, predict which would be single tokens and which would be split:
- "hello"
- "unbelievable"
- "AI"
- "cryptocurrency"

### Exercise 3: Prompt Optimization
Rewrite this verbose prompt to use fewer tokens while maintaining clarity:
```
"I would like you to please write for me a comprehensive and detailed explanation about how neural networks work, including all the technical details and mathematical formulations."
```

### Exercise 4: Architecture Comparison
Research and compare:
- Which architecture would be best for creative writing?
- Which would be best for technical code generation?
- Which would be best for multilingual translation?

### Exercise 5: Real-World Application
Use a tokenizer tool (like OpenAI's tokenizer or Hugging Face's) to:
1. Count tokens in your favorite poem or song lyrics
2. Identify which words are split into multiple tokens
3. Analyze why certain words are split

---

**Continue to Chapter 3: The Art of Contextual Prompting** →

---

*By Roberto | @soyroberto*  
*For more content, visit [allthingscloud.net](https://allthingscloud.net)*
