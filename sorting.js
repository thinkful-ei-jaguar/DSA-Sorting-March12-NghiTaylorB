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
};

function qSort (array, start=0, end = array.length) {
    if(start >= end) {
        return array;
    }
    console.log('start: ', start, 'end: ', end)
    const middle = partition(array, start, end);
    console.log('middle: ', middle)
    array = qSort(array, start, middle);
    array = qSort(array, middle + 1, end);
    return array;
}                       /*i*/
               /*j*/   /*p*/   
testArray = [89, 30, 25, 32, 72]
                //[25, 30, 89, 32, 72]
function partition(array, start, end) {
    const randomIndex = Math.floor(Math.random() * (end-start) + start)
    const pivot = array[randomIndex]
    let j = start
    // if(randomIndex === start) {
    //     j = start + 1
    // }
    for (i = start; i < end -1; i++) {
        if (array[i] <= pivot) {
            
            swap(array, i, j);
            j++;
        }
    }
    //swap(array, end-1, j)
    return j
}

console.log(qSort(testArray, 0, testArray.length))