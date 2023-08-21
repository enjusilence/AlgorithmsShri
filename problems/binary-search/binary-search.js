// https://en.wikipedia.org/wiki/Binary_search_algorithm

export function binarySearch(arr, value) {
  let [l, r] = [0, arr.length - 1];

  while (l < r) {
    const i = Math.ceil((r + l) / 2);
    if (arr[i] === value) {
      return i;
    } else if (arr[i] > value) {
      r = i - 1;
    } else {
      l = i;
    }
  }
  if (arr[l] === value) return l;
}
