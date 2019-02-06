'use strict';

function quicksort(arrayToSort) {
    if (arrayToSort.length === 0) {
        return [];
    }
    const pivot = arrayToSort[0];
    const leftArray = [];
    const rightArray = [];
    const arrayToSortWithoutPivot  = arrayToSort.slice(1);
    for (let index = 0; index < arrayToSortWithoutPivot.length; index++) {
        const element = arrayToSortWithoutPivot[index];
        if (element < pivot) {
            leftArray.push(element);
        } else {
            rightArray.push(element);
        }
    }
    return quicksort(leftArray).concat([pivot].concat(quicksort(rightArray)));
}


function merge(leftArray, rightArray){
    const sortedArray = [];
    while ( leftArray.length > 0 && 
        rightArray.length > 0 ) {
            if (leftArray[0] > rightArray[0]) {
                sortedArray.push(rightArray[0]);
                rightArray = rightArray.slice(1);
            } else {
                sortedArray.push(leftArray[0]);
                leftArray = leftArray.slice(1);
            }
    }
    while(leftArray.length > 0){
        sortedArray.push(leftArray[0]);
        leftArray = leftArray.slice(1);
    }
    while(rightArray.length > 0) {
        sortedArray.push(rightArray[0]);
        rightArray = rightArray.slice(1);
    }
    return sortedArray;
}
function mergesort(arrayToSort) {
    if (arrayToSort.length === 1) return arrayToSort;
    const centerIndex = Math.ceil((arrayToSort.length)/2);
    const leftArray = arrayToSort.slice(0, centerIndex);
    const rightArray = arrayToSort.slice(centerIndex);
    return merge(mergesort(leftArray), mergesort(rightArray));
}

function bubblesort(arrayToSort){
    for (let i = 0; i < arrayToSort.length; i++) {
        for (let j = 0; j < arrayToSort.length; j++) {
            if(arrayToSort[i] < arrayToSort[j]) {
                const temp = arrayToSort[i];
                arrayToSort[i] = arrayToSort[j];
                arrayToSort[j] = temp;
            }
        }
    }
    return arrayToSort;
}

function insertionsort(arrayToSort) {
    for (let i = 1; i < arrayToSort.length; i++) {
        const key = arrayToSort[i];
        let j = i-1;
        while(j >= 0 && arrayToSort[j] > key) {
            arrayToSort[j+1] = arrayToSort[i];
            j = j - 1;
        }
        arrayToSort[j+1] = key;
    }
    return arrayToSort;
}
    
const testArr = [6, 5, 10, 7, 2, 1];
console.log('array to sort:         ', testArr);
console.log('bubble sort result:    ', bubblesort(testArr));
console.log('insertion sort result: ', insertionsort(testArr));
console.log('merge sort result:     ', mergesort(testArr));
console.log('quick sort result:     ', quicksort(testArr));
