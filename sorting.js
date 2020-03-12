function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left, right, array);
}

function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    } else {
      array[outputIndex++] = right[rightIndex++];
    }
  }

  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) {
    array[outputIndex++] = right[i];
  }
  return array;
}

//Exercise 1
// (21, 1, 26, 45, 29, 28, 2, 9)(16, 49, 39, 27, 43, 34, 46, 40)(21, 1, 26, 45)(
//   29,
//   28,
//   2,
//   9
// )(16, 49, 39, 27)(
//   43,
//   34,
//   46,
//   40
// )(21, 1)(/*call3*/ 26, 45)(29, 28)(2, 9)(16, 49)(39, 27)(43, 34)(
//   46,
//   40
// ); /*call 16*/

// //middle
// 21,
//   1,
//   /*<- first two lists*/ 26,
//   45,
//   29,
//   28,
//   2,
//   9,
//   16,
//   49,
//   39,
//   27,
//   43,
//   34,
//   46,
//   (40)[(1, 21)], //input
//   [26, 45],
//   [28, 29],
//   [2, 9],
//   [16, 49],
//   [27, 39],
//   [34, 43],
//   [40, 46][(1, 21, 26, 45)],
//   [2, 9, 28, 29] /*<-7th Merge*/,
//   [16, 27, 39, 49],
//   [34, 40, 43, 46][(1, 2, 9, 21, 26, 28, 29, 45)],
//   [16, 27, 34, 39, 40, 43, 46, 49];

/**
 * Exercise 2
 * 3 9 1 14 17 24 22 20
 *
 * The pivot could have been 17, but could not have been 14.
 *  - False because the pivot could have been 14 or 17 since all values to the left of 14 and 17 are lower
 *    and all values to the right of 14 and 17 are higher.
 *
 * The pivot could have been either 14 or 17.
 *  - True (see explanation above)
 *
 * Neither 14 nor 17 could have been the pivot
 *  - False (see explanation above)
 *
 * The pivot could have been 14, but could not have been 17
 *  - False (see explanation above)
 *
 *
 * 14, 17, 13, 15, 19, 10, 3, 16, 9, 12
 * Last item as pivot:
 * [10, 3, 9, 12, 19, 14, 17, 16, 13, 15]  First partition
 * [3, 9, 10] Second partition
 *
 * First item as pivot:
 * [12, 13, 10, 3, 9, 14, 15, 16, 19, 17]  First partition
 * [9, 10, 3, 12, 13] Second partition
 */

function quickSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }
  const middle = partition(array, start, end);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);
  return array;
}

function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end - 1, j);
  return j;
}

/*3*/

function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

function qSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }
  const middle = partition(array, start, end);
  array = qSort(array, start, middle);
  array = qSort(array, middle + 1, end);
  return array;
}                            
                 
const testArray = [32, 25, 30, 89, 72];
const testArray2 = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1,6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]

function partition(array, start, end) {
  
  const pivot = array[start];
  let j = start + 1;
  let i = end - 1
  while(j <= i) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
    else {
        --i
    }
  }
  swap(array, start, i);

  return i;
}

//console.log("final:", qSort(testArray2, 0, testArray2.length));

/**
 * Interview Questions
 *
 * Write an algorithm to sort an array containing only 1s and 0s.
 * Your algorithm should only iterate through the array once.
 * You can't use any extra memory to store the whole dataset.
 *
 * Input: [0,1,1,0,0,1,0,1,0,1]
 * Output: [0,0,0,0,0,0,1,1,1,1,1]
 *
 * Use 2 point approach
 * anything equals to 1 to the right and 0 to left
 *
 * i at start and j at the end
 * compare each and swap if i > j
 */

function bitSort(arr) {
  let j = 0;

  for (let i = arr.length - 1; i > j; i--) {
    if (arr[i] < arr[j]) {
      swap(arr, i, j);
      j++;
    }
    if (arr[i] === arr[j]) {
      if (arr[i] === 0) {
        i++;
      } else {
      }
    }
  }
  return arr;
}

// console.log(bitSort([1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0]));

/*Exercise 4*/

function mSort(arr) {
    if(arr.length <= 1) {
        return arr
    }

    const middle = Math.floor(arr.length/2);
    let left = arr.slice(0, middle)
    let right = arr.slice(middle, arr.length)

    left = mSort(left)
    right = mSort(right)

    
    return mergeEm(left, right, arr)
}

function mergeEm (left, right, arr) {
    let indexLeft = 0
    let indexRight = 0
    let indexOutput = 0

    while(indexLeft < left.length && indexRight < right.length){
        if(left[indexLeft] < right[indexRight]) {
            arr[indexOutput++] = left[indexLeft++]
        }
        else {
            arr[indexOutput++] = right[indexRight++]
        }
    }

    for(let i=indexLeft; i<left.length; i++) {
        arr[indexOutput++] = left[i]
    }

    for(let i=indexRight; i < right.length; i++) {
        arr[indexOutput++] = right[i]
    }
    return arr
}

//console.log(mSort(testArray2))

