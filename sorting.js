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
};

function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        }
        else {
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
};


//Exercise 1
(21, 1, 26, 45, 29, 28, 2, 9) (16, 49, 39, 27, 43, 34, 46, 40) 

(21, 1, 26, 45) (29, 28, 2, 9) (16, 49, 39, 27) (43, 34, 46, 40) 

(21, 1)/*call3*/ (26, 45) (29, 28) (2, 9) (16, 49) (39, 27) (43, 34) (46, 40) /*call 16*/

                        //middle 
21, 1, /*<- first two lists*/ 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40 //input
[1, 21], [26, 45], [28, 29], [2,9], [16, 49], [27, 39], [34, 43], [40, 46] 
[1, 21, 26, 45], [2, 9, 28, 29]/*<-7th Merge*/, [16, 27, 39, 49], [34, 40, 43, 46] 
[1, 2, 9, 21, 26, 28, 29, 45], [16, 27, 34, 39, 40, 43, 46, 49] 