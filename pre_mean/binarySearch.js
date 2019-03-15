function binarySearch(arr,value){
    var min = 0;
    var max = arr.length - 1;
    var middle = Math.floor((min + max)/2);

    while (arr[middle] != value && min < max){
        if (value < arr[middle]){
            max = middle - 1;
        }
        else {
            min = middle + 1;
        }
        middle = Math.floor((min + max)/2);
    }
    if (arr[middle] == value){
        return middle;
    }
    else {
        return -1;
    }
}

function binarySearchRecursive(arr, value, min, max){
    var middle = Math.floor((min + max)/2);
    while (arr[middle] != value && min < max){
        if (value < arr[middle]){
            return binarySearchRecursive(arr, value, min, middle-1)
        }
        else {
            return binarySearchRecursive(arr, value, middle+1, max)
        }
    }
    if (arr[middle] == value){
        return middle;
    }
    else {
        return -1;
    }
}

console.log(binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94, 200], 93));
console.log(binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94], 15));

var arr = [1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94, 200];
var value = 93;
var min = 0;
var max = arr.length - 1;
console.log(binarySearchRecursive(arr, value, min, max));

var arr = [1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94];
var value = 15;
var min = 0;
var max = arr.length - 1;
console.log(binarySearchRecursive(arr, value, min, max));

// What is the Big O time complexity of binary search?
// O(n)

