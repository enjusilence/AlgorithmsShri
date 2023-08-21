// https://sortvisualizer.com/selectionsort/
// https://en.wikipedia.org/wiki/Selection_sort

export function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let index;
        let min = Infinity; 
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < min) {
                min = arr[j];
                index = j;
            }
        }
        [arr[index], arr[i]] = [arr[i], arr[index]];
    }
    return arr;
}
