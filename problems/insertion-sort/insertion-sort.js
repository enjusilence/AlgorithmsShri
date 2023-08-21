// https://sortvisualizer.com/insertionsort/
// https://en.wikipedia.org/wiki/Insertion_sort

export function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let j = i;
        while (arr[j] < arr[j-1]) {
            [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
            j--;
        }
    }
    return arr;
}
