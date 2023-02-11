~~~cpp
class Solution {
public:
    int thirdMax(vector<int>& nums) {
        long one   = LONG_MIN;
        long two   = LONG_MIN;
        long three = LONG_MIN;
        for(auto number : nums) {
            if(number == one
            || number == two
            || number == three)
                continue;
            if(number > one) {
                three = two;
                two   = one;
                one   = number;
            } else if(number > two) {
                three = two;
                two   = number;
            } else if(number > three) {
                three = number;
            }
        }
        return (int)(three == LONG_MIN) ? one : three;
    }
};
~~~

~~~cpp
class Solution {
public:
    int thirdMax(vector<int>& nums) {
        sort(nums.begin(),nums.end());
        int N = nums.size();
        int k = 1;
        for(int i = N-2; i >=0 ; i--) {
            if(nums[i] < nums[i+1]) k++;
            if(k == 3) return nums[i];
        }
        return nums[N-1];
    }
};
~~~