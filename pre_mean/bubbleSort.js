function bubbleSort(arr){
    for (var i=0; i<arr.length-1; i++){
        for (var j=0; j<arr.length-i-1; j++){
            if (arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

function bubbleSortFastExitDoWhile(arr){
    do {
        var swapped = false;
        for (var i=0; i<arr.length-1; i++){
            for (var j=0; j<arr.length-i-1; j++){
                if (arr[j] > arr[j+1]){
                    var temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
    }
    while (swapped == true);
    return arr;
}

function bubbleSortFastExitBooleanCheck(arr){
    for (var i=0; i<arr.length-1; i++){
        var swapped = false;
        for (var j=0; j<arr.length-i-1; j++){
            if (arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swapped = true;
            }
        }
        if (swapped == false){
            break;
        }
    }
    return arr;
}

function bubbleSortFastExitCount(arr){
    for (var i=0; i<arr.length-1; i++){
        var count = 0;
        for (var j=0; j<arr.length-i-1; j++){
            if (arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                count++;
            }
        }
        if (count == 0){
            break;
        }
    }
    return arr;
}

console.log(bubbleSort([5,3,6,1,8,7,2,4]));
console.log(bubbleSortFastExitDoWhile([5,3,6,1,8,7,2,4]));
console.log(bubbleSortFastExitBooleanCheck([5,3,6,1,8,7,2,4]));
console.log(bubbleSortFastExitCount([5,3,6,1,8,7,2,4]));

// 1. O(n)
// 2. O(1)
// 3. O(n)
// 4. O(n^2)