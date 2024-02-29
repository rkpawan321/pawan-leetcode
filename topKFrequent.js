




var topKFrequent = function (nums, k) {
  const map = {};
  for (let i of nums) {
    if (map[i]) {
      map[i].count++;
    } else {
      map[i] = { val: i, count: 1 };
    }
  }
  let arr = Object.values(map);
  let arrSorted = arr.sort((a, b) => b.count - a.count)
  let requiredArray = arrSorted.slice(0, k);
  return requiredArray.map((i) => i.val)
};


const nums = [1, 1, 1, 2, 2, 3];
const k = 2;
console.log(topKFrequent(nums, k));//[1,2]



