var twosums = (nums, target) => {
    const objs = {};
    for (let i = 0; i <= nums.length; i++) {
      let balanceNum = target - nums[i];
      if (balanceNum in nums) {
        return [nums[i], balanceNum];
      } else {
        objs[nums[i]] = true;
      }
    }
  }
  
  const nums = [2, 7, 11, 15];
  const target = 9;
  
  console.log(twosums(nums, target))
  