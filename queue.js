"use strict"

//helper function for switching nodes
function swap(arr, a, b){
   [arr[a], arr[b]] = [arr[b], arr[a]]
   return arr
}

//recursive function for a node bubbling up upon insertion to the tree
function bubbleUp(arr, childIdx){
  const parentIdx = Math.floor(childIdx / 2)
  if((parentIdx > 0) && (arr[parentIdx] > arr[childIdx])){
    arr = swap(arr, parentIdx, childIdx)
    return bubbleUp(arr, parentIdx)
  } else {
  return arr
  }
}

//pushing to queue
function pushToQueue(arr, el){
  const tail = arr.length
  arr.push(el)
  console.log(tail)
  return bubbleUp(arr, tail)
}

//recursive function for a node bubbling down after the top node has been removed
function bubbleDown(arr, parentIdx){
  const leftChildIdx = parentIdx * 2
  const rightChildIdx = parentIdx * 2 + 1
  if(arr[parentIdx] > arr[leftChildIdx]){
    arr = swap(arr, parentIdx, leftChildIdx)
    return bubbleDown(arr, leftChildIdx)
  } else if(arr[parentIdx] > arr[rightChildIdx]) {
    arr = swap(arr, parentIdx, rightChildIdx)
    return bubbleDown(arr, rightChildIdx)
  } else {
    return arr
  }
}

//removing from queue
function popFromQueue(arr){
  const head = arr[1]
  arr = swap(arr, 1, arr.length - 1)
  arr.pop()
  arr = bubbleDown(arr, 1)
  return head
}

//some test cases
let test = [undefined,3,124,65,21]

console.log(pushToQueue(test, 2))
console.log(popFromQueue(test))
console.log(test)
