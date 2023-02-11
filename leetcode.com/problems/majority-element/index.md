~~~cpp
class Solution {
public:
    int majorityElement(vector<int>& nums) {
        unordered_map <int,int> frequency_map;
        int size = nums.size();
        for(int number : nums)
            if(++frequency_map[number] > size / 2)
                return number;
        return 0;
    }
};
~~~