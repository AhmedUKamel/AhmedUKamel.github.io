~~~cpp
class Solution {
public:
    vector<int> findDisappearedNumbers(vector<int>& nums) {
        int N = nums.size();
        vector <bool> freqArr(N+1);
        for(auto i : nums)
            freqArr[i] = true;
        // N = freqArr.size();
        vector <int> result;
        for(int i = 1; i <= N; i++)
            if(!freqArr[i]) result.push_back(i);
        return result;
    }
};
~~~
