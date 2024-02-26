var groupAnagrams = function(strs) {
    const hash = {};
    for (let i=0; i < strs.length ; i++) {
        let sortedString = strs[i].split('').sort().join('');
        if (sortedString in hash) {
            hash[sortedString].push(strs[i])
        } else {
            hash[sortedString] = [strs[i]]
        }
    };
    return Object.values(hash);
};

const strs = ["eat","tea","tan","ate","nat","bat"];
groupAnagrams(strs);