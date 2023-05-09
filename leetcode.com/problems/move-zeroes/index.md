~~~cpp
class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int index = 0;
        vector <int> result(nums.size());
        for(auto num : nums)
            if(num) result[index++] = num;
        nums = result;
    }
};
~~~

~~~cpp
class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int k = 0;
        for(int i = 0; i < nums.size(); i++)
            if(nums[i]) nums[k++] = nums[i];
        while(k < nums.size()) nums[k++] = 0;
    }
};
~~~

~~~cpp
class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int s = 0;
        for(int i = 0; i < nums.size(); i++)
            if(!nums[i]) s++;
            else if(s) {
                int t = nums[i];
                nums[i] = 0;
                nums[i-s] = t;
            }
    }
};
~~~
