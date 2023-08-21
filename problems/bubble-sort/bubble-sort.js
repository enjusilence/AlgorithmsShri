// https://sortvisualizer.com/bubblesort/
// https://en.wikipedia.org/wiki/Bubble_sort

export function bubbleSort(arr) {
    let hasChanged = true;
    while (hasChanged) {
        hasChanged = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i+1]) {
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
                hasChanged = true;
            }
        }
    }
    return arr;
}
