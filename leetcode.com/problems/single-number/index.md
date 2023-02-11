~~~cpp
class Solution {
public:
    int singleNumber(vector<int>& nums) {
        set <int> s(nums.begin(), nums.end());
        int sumset = 0, sumvec = 0;
        for(auto i : s) sumset += i;
        for(auto i : nums) sumvec += i;
        return 2 * sumset - sumvec;
    }
};
~~~

~~~cpp
class Solution {
public:
    int singleNumber(vector<int>& nums) {
        int x = 0;
        for(auto i : nums) x ^= i;
        return x;
    }
};
~~~

~~~cpp
class Solution {
public:
    int singleNumber(vector<int>& nums) {
        map <int, int> m;
        for(auto i : nums)
            m[i]++;
        for(auto i : m)
            if(i.second == 1) return i.first;
        return 0;
    }
};
~~~

~~~cpp
class Solution {
public:
    int singleNumber(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        int N = nums.size() - 1;
        for(int i = 0; i < N; i+=2)
            if(nums[i] != nums[i+1]) return nums[i];
        return nums[N];
    }
};
~~~