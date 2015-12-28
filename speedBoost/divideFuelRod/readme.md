#Divide Fuel Rod

*We have found an interesting algorithm which may be used for the optimisation of our fuel system. If we will divide a fuel rod into several pieces following the Triangular numbers law, then we appear to generate more power.*

Our goal is to divide the fuel rod in several pieces. The length of the rod is **N** meters. All of the parts should have integer lengths (1, 2, 3 .. meters, but not 1.2).

You should divide the fuel rod so that the lengths form a consecutive fragment of the [Triangular numbers](http://en.wikipedia.org/wiki/Triangular_number) series with the maximum quantity (fragment's length). The parts should have different lengths (no repeating). For example: **64** should divided at **15, 21, 28**, because **28, 36** is shorter and **1, 3, 15, 45** is not a consecutive fragment.

You are given th length of the fuel rod (N). You should return a list of lengths (integers) for the parts in ascending order. If it's not possible and the problem does not have a solution, then you should return an empty list.
```
64  ================================================================
28  ----------------------------
21  ---------------------
15  ---------------

371 =====================================
91  ---------
78  --------
66  -------
55  ------
45  -----
36  ----
```
###Input
The length of the rod as an integer.

###Output
The fragments of the fuel rod as an array of integers (sorted in ascending order) or an empty array.

###Example:
```javascript
disjoint(64) // [15, 21, 28]
disjoint(371) // [36, 45, 55, 66, 78, 91]
disjoint(225) // [105, 120]
disjoint(882) // []
```

###Precondition
0 < length < 1000

###How it is used
In this task you will learn about triangular numbers and how to apply your code to take on geometric problems. A triangular number counts the objects that form an equilateral triangle.

Here’s a real world example not involving shapes: In a competitive tournament format that uses a round-robin group stages, the number of matches that need to be played between n teams is equal to the triangular number Tn−1. For example, a group stage with 4 teams requires 6 matches, and a group stage with 8 teams requires 28 matches.

[Repository](https://github.com/Checkio-Game-Missions/checkio-empire-divide-fuel-rod.git)
