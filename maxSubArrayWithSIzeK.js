function maxSub(arr, k) {
    if (arr.length < k) return null;  // Edge case: not enough elements

    let windowSum = 0;
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }

    let maxSum = windowSum;

    for (let i = k; i < arr.length; i++) {
        console.log(i, i-k,'=========>' ,arr[i], arr[i-k], "==>",arr[i] - arr[i - k])
        windowSum = windowSum - arr[i-k]
        windowSum = windowSum + arr[i]
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
    
}

console.log(maxSub([1, 4, 2, 10, 2, 3, 1, 0, 20], 4));