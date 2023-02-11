~~~cpp
class Solution {
public:
    void sortColors(vector<int>& nums) {
        int N = nums.size();
        for(int i = 0; i < N-1; i++)
            for(int j = 0; j < N-i-1; j++)
                if(nums[j] > nums[j+1])
                    swap(nums[j],nums[j+1]);
    }
};
~~~