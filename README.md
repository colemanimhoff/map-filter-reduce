# Native Array Methods: Map, Filter, Reduce

## Objectives

* Explain the use case for native array methods
  - map
  - filter
  - reduce
* Write map, filter, and reduce functions
* Identify the parts of a native array method
* Passing a named function to native method
* Chaining or using multiple at once

## Notes

- forEach
  - Basically just replaces FOR loop
  
- Use case for MAP
  - Take an array of data and transform each index in the same way
  - Return a new array from the existing array
  - Difference from forEach?
  - Often 'cleaning up' the data
  - ALWAYS return an array of the SAME length
  - MUST include a return statement

- Use case for FILTER
  - Return a new array that only includes things that pass our 'test'
  - We're evaluating against some condition
  - Check every item/index in the array against that condition
  - New array will be of EQUAL or LESSER length than input

- Use case for REDUCE
  - Takes all items in array and reduces to single value
  - Swiss Army knife of NAM
  - Not necessarily a new array
  - Could be array, object, number, string, etc.
