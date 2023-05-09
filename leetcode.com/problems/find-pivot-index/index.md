~~~cpp
class Solution {
public:
    int pivotIndex(vector<int>& nums) {
        int size = nums.size();
        vector <int> left_prefix_sum(size);
        vector <int> right_prefix_sum(size);

        for(int i = 0,last = 0; i < size; i++) {
            left_prefix_sum[i] = last;
            last += nums[i];
        }

        for(int i = size-1,last = 0; i >= 0; i--) {
            right_prefix_sum[i] = last;
            last += nums[i];
        }

        for(int i = 0,last = 0; i < size; i++)
            if(left_prefix_sum[i] == right_prefix_sum[i])
                return i;
                    
        return -1;
    }
};
~~~