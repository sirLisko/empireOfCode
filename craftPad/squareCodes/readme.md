#Square Codes

*We have thought up tricky friend or foe recognition system for our vehicles, when they land. On the landing, pad glowing lines appear and pilots need to answer how many square he counted.*

The glowing line image is a grid of numbered dots. The grid is comprised of a square shaped array of dots and contains lines that connect some pairs of adjacent dots. The answer to the code is the number of squares that are formed by these lines. For example, in the figure shown below, there are 3 squares: 2 small squares and 1 medium square.

	 1---2   3---4
	 |   |       |
	 5---6---7---8
	     |   |   |
	 9  10--11  12
	     |       |
	13  14--15--16

	3 Squares -- 1-6, 6-11, 6-16
	 1---2---3---4
	 |           |
	 5   6---7   8
	 |   |   |   |
	 9  10--11  12
	 |           |
	13--14--15--16

	2 Squares -- 1-16, 6-11

The dots are marked by the numbers 1 through 16. The endpoints of the lines are represented by lists of two numbers.

###Input
Lines as arbitrary numbers of arguments as arrays. Each array consists of the two integers.

###Output
The quantity of squares formed as an integer.

###Example
```javascript
countSquares([[1, 2], [3, 4], [1, 5], [2, 6], [4, 8], [5, 6], [6, 7],
 [7, 8], [6, 10], [7, 11], [8, 12], [10, 11],
 [10, 14], [12, 16], [14, 15], [15, 16]]) == 3
countSquares([[1, 2], [2, 3], [3, 4], [1, 5], [4, 8],
 [6, 7], [5, 9], [6, 10], [7, 11], [8, 12],
 [9, 13], [10, 11], [12, 16], [13, 14], [14, 15], [15, 16]]) == 2
```

###Precondition

	∀ x ∈ lines: 0 ≤ x ≤ 16

###Optional goals

#####Rank 2
If you see a number great than 16, then points are placed in 5 by 5 square.

*Precondition Rank 2:*

	∀ x ∈ lines: 0 ≤ x ≤ 25

#####Rank 3
Some points can be destroyed. If you see (0, N) or (N, 0), then N-th points is destroyed and all lines with this point are wiped out too.

###How it is used:

This is a simple puzzle that illustrates pattern searching. For complex cases you can improve your program and use it to search for more complex patterns, shapes and objects.

[Repository](https://github.com/Checkio-Game-Missions/checkio-empire-square-codes.git)
