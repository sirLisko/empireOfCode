#Striped Words

The alphabet contains both vowel and consonant letters (yes, we divide the letters).

Vowels -- A E I O U Y

Consonants -- B C D F G H J K L M N P Q R S T V W X Z

You are given a block of text with different words. These words are separated by white-spaces and punctuation marks. Numbers are not considered words in this mission (a mix of letters and digits is not a word either). You should count the number of words (striped words) where the vowels with consonants are alternating, that is; words that you count cannot have two consecutive vowels or consonants. The words consisting of a single letter are not striped -- do not count those. Casing is not significant for this mission.

###Input
A text as a string.

###Output
A quantity of striped words as a number.

###Example
```javascript
stripedWords("My name is ...") == 3
stripedWords("Hello world") == 0
stripedWords("A quantity of striped words.") == 1
stripedWords("Dog,cat,mouse,bird.Human.") == 3
```

###Precondition
A text contains only ASCII symbols.

	0 < |text| < 10000

###How it is used

This idea in this task is a useful exercise for linguistic research and analysis. Text processing is one of the main tools used in the analysis of various books and languages and can help translate print text to a digital format.

[Repository](https://github.com/Empire-of-Code-Puzzles/checkio-empire-striped-words)
