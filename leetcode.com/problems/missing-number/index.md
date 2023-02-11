~~~cpp
class Solution {
public:
    int missingNumber(vector<int>& nums) {
        int number = nums.size() * (nums.size() + 1) / 2;
        for(auto n : nums) number -= n;
        return number;
    }
};
~~~