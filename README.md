## Fisher-Yates Shuffle 
## JavaScript Implementation

Tutorial 

Assume that you have a string like 
this: A B C D E F

we start by the lastest index : F

first of all you need a random number generator
this generator must be a pseudo-random value generator
and this generator should generate numbers that smaller than lenght of our string

So: F has index of 5

let random number string is  1 3 4 2 1

get the value of index 5, which is 1 
1 3 4 2 -1-

swag index 5 with 1 in our string

F B C D E A

Apply the same thing for index 4, 3 and so on.
