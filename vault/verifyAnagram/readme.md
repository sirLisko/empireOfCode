#Verify Anagrams

*To institute a super secret password-answer security system, we've implemented an anagram policy where all passwords must be anagrams for answers. There's only one problem, we need to verify that people are using proper anagrams in their passwords.*

An anagram is a type of word play, the result of rearranging the letters of a word or phrase to produce a new word or phrase, using all the original letters exactly once. Two words are anagrams to each other if we can get one from another by rearranging the letters. Anagrams are case-insensitive and don't take whitespaces into account.

For example: "Gram Ring Mop" and "Programming" are anagrams. But "Hello" and "Ole Oh" are not.

You are given two words or phrases. Try to verify if they are anagrams.

###Input
Two arguments. Words as strings.

###Output
Determination if the passwords are anagrams or not as boolean (True or False).

###Example
```javascript
verifyAnagrams("Programming", "Gram Ring Mop") === true
verifyAnagrams("Hello", "Ole Oh") === false
verifyAnagrams("Kyoto", "Tokyo") === true
```

###Precondition
	0 < |first_word| < 100

	0 < |second_word| < 100

	Words contain only ASCII latin letters and whitespaces.

###How it is used
Anagramming can be a fun way to train your brain, but they have other applications. Psychologists use anagram-oriented tests, often called "anagram solution tasks", to assess the implicit memory. Anagrams are often used to create pseudonyms, allowing one to conceal, reveal or operate somewhere in between - like a mask that can establish identity. In addition to this, multiple anagramming is a technique sometimes used to solve some kinds of cryptograms.

[Repository](https://github.com/Checkio-Game-Missions/checkio-empire-verify-anagrams.git)
