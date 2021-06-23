function fibonacci(num) {
  let penultimate = 1;
  let antepenultimate = 0;

  if(num === 0) return 0;

  for(let i=0; i<num-1; i++){
    let current = penultimate + antepenultimate;
    antepenultimate = penultimate;
    penultimate = current;
  }
  return penultimate;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("Expecting: 21");
  console.log("=>", fibonacci(8));

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("Expecting: 377");
  console.log("=>", fibonacci(14));

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
/*num represents the index position in the sequence, which also means
  if I add 1 to num, it will give me the length of the sequence if it were an array
  >>loop where i < num + 1 that pushes the next value in the sequence
  >>though, we don't actually need the array and since the fib sequence is penultimate + antepenultimate
    it may be easier to just run a loop that does that equation
    >>the for loop would need to track:
      >>the previous two numbers sum: pen + antepen
      >>the amount of times its looped
      >>return the pen after the last time through
  
  
  */
// And a written explanation of your solution
/*We first establish two variables, 'penultimate' and 'antepenultimate' that will track the previous two numbers
in the sequence.
A conditional to return zero if the argument passed in is zero allows the loop to be skipped.
The for loop sets a counter variable 'i' to zero with the condition that the loop will end 
once it reaches parameter 'num' minus 1. This is accounts for the zero-indexing being used, making
('num' - 1) equal to the length of the sequence's array where 'num' represents it's index.
Inside of the loop, the variable 'current' allows us to save the sum of 'penultimate' and 'antepenultimate',
before setting 'antepenultimate' to equal 'penultimate' and 'penultimate' to equal 'current' in preparation
for the next iteration.
Finally, once the loop has finished, 'penultimate' is returned, representing the value help at nth of the
Fibonacci sequence.

By the way, in music school, they make you analyze pieces of music based on the Fibonacci sequence. 
This problem was nothing compared to doing that. 
*/