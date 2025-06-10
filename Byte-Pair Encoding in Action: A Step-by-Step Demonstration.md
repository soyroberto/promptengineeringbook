# Byte-Pair Encoding in Action: A Step-by-Step Demonstration

## Introduction to Our Example

To demonstrate how Byte-Pair Encoding (BPE) works in practice, we'll use the Spanish sonnet "A DULCINEA DEL TOBOSO" by Miguel de Cervantes. This example is particularly interesting because it contains Spanish-specific characters and poetic language, which highlights how BPE handles different linguistic features.

Here's the poem we'll be working with:

```
A DULCINEA DEL TOBOSO

¡Oh, quién tuviera, hermosa Dulcinea,
por más comodidad y más reposo,
a Miraflores puesto en el Toboso,
y trocara sus Londres con tu aldea!

¡Oh, quién de tus deseos y librea
alma y cuerpo adornara, y del famoso
caballero que hiciste venturoso
mirara alguna desigual pelea!

¡Oh, quién tan castamente se escapara
del señor Amadís como tú hiciste
del comedido hidalgo don Quijote!

Que así envidiada fuera, y no envidiara,
y fuera alegre el tiempo que fue triste,
y gozara los gustos sin escotes.
```

## The BPE Process: Technical Path

Let's walk through the BPE process step by step, as it would be applied to this poem during tokenizer training.

### Step 1: Character-Level Initialization

We begin by breaking the text into individual characters and counting their frequencies:

```
Character frequencies:
' ': 71
'a': 28
'e': 27
'o': 25
's': 19
'r': 17
'i': 15
't': 14
'd': 13
'n': 13
'l': 12
'u': 11
'c': 10
'm': 9
'¡': 3
'O': 3
'h': 3
',': 3
'q': 3
'é': 3
...
```

Our initial vocabulary consists of all unique characters in the text.

### Step 2: Count Adjacent Pairs

Next, we count the frequency of all adjacent character pairs:

```
Pair frequencies:
'e ': 12
' d': 8
'a ': 8
'o ': 8
' y': 6
'os': 6
'ar': 5
'ra': 5
'de': 5
'el': 5
'en': 5
...
```

### Step 3: First Merge Operation

We identify the most frequent pair, which is 'e ' (appearing 12 times), and merge it into a new token 'e_':

```
Vocabulary addition: 'e_'
```

Now we apply this merge throughout the text:

```
¡Oh, quién tuvi_ra, hermosa Dulcine_a,
por más comodidad y más reposo,
a Miraflore_s pue_sto en el Toboso,
y trocara sus Londre_s con tu alde_a!
...
```

### Step 4: Update Pair Frequencies

After applying the merge, we recalculate pair frequencies:

```
Updated pair frequencies:
'a_': 8
'o_': 8
' d': 8
' y': 6
'os': 6
'ar': 5
'ra': 5
'de': 5
...
```

### Step 5: Second Merge Operation

The most frequent pairs are now 'a_' and 'o_' (both appearing 8 times). Let's say we choose 'a_':

```
Vocabulary addition: 'a_'
```

Applying this merge:

```
¡Oh, quién tuvi_ra_, hermos a_ Dulcine_a_,
por más comodidad y más reposo,
a_ Miraflore_s pue_sto en el Toboso,
y trocara_ sus Londre_s con tu alde_a_!
...
```

### Step 6: Continue Merging

We continue this process, repeatedly finding the most frequent pair and merging it:

```
Merge 'o_' → 'o_'
Merge ' d' → '_d'
Merge ' y' → '_y'
...
```

As we proceed, we'll start seeing merges of tokens that were themselves created by previous merges:

```
Merge 'a_' + ' ' → 'a_ '
Merge 'e_' + 's' → 'e_s'
...
```

### Step 7: Building Word-Level Tokens

Eventually, common words and subwords emerge:

```
Merge 'qu' + 'e_' → 'que_'
Merge '_y' + '_' → '_y_'
Merge 'de' + 'l' → 'del'
...
```

### Step 8: Final Vocabulary

After a predetermined number of merges (typically thousands), we have a vocabulary that efficiently represents the text. Common words like "que", "del", "los" might be single tokens, while rarer words are broken into subword units.

## The BPE Process: Practical Path

If the technical explanation seems complex, let's look at a more intuitive way to understand BPE.

### Visual Representation

Imagine we're building a puzzle. We start with individual puzzle pieces (characters), and then we notice that certain pieces always appear together, so we glue them to create larger pieces:

![BPE Visualization: Starting with individual characters](bpe_step1.png)

As we continue, we create increasingly larger pieces for common patterns:

![BPE Visualization: Merging common pairs](bpe_step2.png)

Eventually, we have a mix of large pieces (common words) and smaller pieces (rare words or parts of words):

![BPE Visualization: Final vocabulary with mixed token sizes](bpe_step3.png)

### Leonardo's Explanation

<div class="leonardo-box">
<img src="leonardo_icon.png" alt="Leonardo the AI Fox" class="leonardo-icon">
<p><strong>Leonardo Says:</strong> "Think of BPE like learning shorthand. If you're taking notes and notice you write 'the' very often, you might create a special symbol for it to save time. BPE does something similar—it creates 'shortcuts' for common patterns in language. For our Spanish poem, it might create special tokens for common Spanish words like 'que' or 'del', while breaking down rarer words into smaller pieces."</p>
</div>

## Applying BPE to Our Spanish Poem

Let's see how a trained BPE tokenizer might actually tokenize our poem. For this example, we'll use a hypothetical vocabulary size of 50,000 tokens, similar to what GPT models use.

### Tokenization Result

```
["¡", "Oh", ",", " quién", " tuv", "iera", ",", " hermos", "a", " Dulc", "inea", ","]
["por", " más", " com", "od", "idad", " y", " más", " re", "poso", ","]
["a", " Mir", "af", "lores", " puesto", " en", " el", " To", "boso", ","]
["y", " troc", "ara", " sus", " Lon", "dres", " con", " tu", " ald", "ea", "!"]
...
```

Notice how:
- Common Spanish words like "por", "más", "y", "el" are single tokens
- Names like "Dulcinea" are split into "Dulc" + "inea"
- The location "Toboso" is split into "To" + "boso"
- Accented characters like "é" are preserved

### Token Count Analysis

Let's analyze the token efficiency:

- Original text: 14 lines, approximately 80 words
- Tokenized: Approximately 120-140 tokens

This gives us a ratio of about 1.5-1.75 tokens per word, which is typical for European languages in modern tokenizers.

## Comparing with Other Languages

To highlight how tokenization varies across languages, let's compare a line from our Spanish poem with equivalent translations:

Spanish (original):
```
¡Oh, quién tuviera, hermosa Dulcinea,
```
Tokens: ["¡", "Oh", ",", " quién", " tuv", "iera", ",", " hermos", "a", " Dulc", "inea", ","] (12 tokens)

English (translation):
```
Oh, who would have, beautiful Dulcinea,
```
Tokens: ["Oh", ",", " who", " would", " have", ",", " beautiful", " Dulc", "inea", ","] (10 tokens)

Chinese (translation):
```
噢，谁能拥有，美丽的杜尔西内娅，
```
Tokens: ["噢", "，", "谁", "能", "拥", "有", "，", "美", "丽", "的", "杜", "尔", "西", "内", "娅", "，"] (16 tokens)

Japanese (translation):
```
ああ、誰が美しいドゥルシネーアを持っていただろうか、
```
Tokens: ["ああ", "、", "誰", "が", "美", "し", "い", "ド", "ゥ", "ル", "シ", "ネ", "ー", "ア", "を", "持", "って", "い", "た", "だろ", "う", "か", "、"] (23 tokens)

This comparison illustrates how languages with non-Latin scripts typically require more tokens to represent the same semantic content.

## BPE's Handling of Special Cases

Our poem example also demonstrates how BPE handles several special cases:

### 1. Punctuation

Notice how punctuation marks like "¡", "!", ",", and "." are typically their own tokens. This allows the model to learn punctuation patterns independently of the words they accompany.

### 2. Capitalization

BPE tokenizers are usually case-sensitive. In our poem, "Oh" at the beginning of lines is tokenized differently than if it appeared in lowercase.

### 3. Accented Characters

Spanish characters with accents like "é" in "quién" are preserved as distinct characters, allowing the model to learn language-specific patterns.

### 4. Proper Nouns

Names like "Dulcinea", "Toboso", and "Amadís" are often broken into subwords because they're less common in the training corpus.

## Conclusion: The Elegance of BPE

The BPE algorithm demonstrates an elegant solution to the vocabulary problem in language modeling. By iteratively merging frequent character pairs, it creates a vocabulary that efficiently represents text at multiple granularities—from characters to subwords to whole words.

For our Spanish poem, BPE allows the model to handle:
- Spanish-specific vocabulary and grammar
- Proper names from Don Quixote
- Poetic language and structure
- Accented characters and punctuation

In the next section, we'll explore why BPE matters for everyday users of AI systems, even if they never need to understand its technical details.
