let arr1 = [10, 7, 8, 9, 1, 5];

function Partition(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);
  return Merge(Partition(leftArr), Partition(rightArr));
}

function Merge(left, right) {
  console.log(left);
  const SortArr = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      SortArr.push(left.shift())
    } else {
      SortArr.push(right.shift())
    }
  }
  return [...SortArr, ...left, ...right];
}

console.log(Partition(arr1))