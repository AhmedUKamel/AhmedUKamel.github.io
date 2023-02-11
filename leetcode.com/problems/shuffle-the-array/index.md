~~~cpp
class Solution {
public:
    vector<int> shuffle(vector<int>& nums, int n) {
        int size = nums.size();
        vector <int> result(size);
        for(int i = 0, j = n, k = 0; k < size;) {
            result[k++] = nums[i++];
            result[k++] = nums[j++];
        }
        return result;
    }
};
~~~