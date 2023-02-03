~~~cpp
class Solution {
public:
    int removeElement(vector<int>& nums, int val) {
        int ctr = 0;
        for(int i = 0; i < nums.size(); i++)
            if(nums[i] != val)
                nums[ctr++] = nums[i];
        return ctr;
    }
};
~~~