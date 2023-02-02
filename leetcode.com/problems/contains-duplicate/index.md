## Using Set Method 1
~~~cpp
class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        set<int> s;
        for(auto i : nums)
            if(!s.insert(i).second)
                return true;
        return nums.size() != s.size();
    }
};
~~~
## Using Set Method 2
~~~cpp
class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        set<int> s(nums.begin(), nums.end());
        return nums.size() != s.size();
    }
};
~~~

## Using Map
~~~cpp
class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        map <int,int> map;
        for(auto i : nums) map[i]++;
        for(auto i : map) 
            if(i.second > 1)
                return true;
        return false;
    }
};
~~~

## Sorted Vector
~~~cpp
class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        sort(nums.begin(),nums.end());
        for(int i = 0; i < nums.size() - 1; i++)
            if(nums[i] == nums[i+1])
                return true;
        return false;
    }
};
~~~