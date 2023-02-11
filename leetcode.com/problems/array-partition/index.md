~~~cpp
class Solution {
public:
    int arrayPairSum(vector<int>& nums) {
        sort(nums.begin(),nums.end());
        int sum = 0;
        int N = nums.size();
        for(int i = 0; i < N; i+=2)
            sum += min(nums[i],nums[i+1]);
        return sum;
    }
};
~~~

~~~cpp
class Solution {
public:
    int arrayPairSum(vector<int>& nums) {
        int k = 10e+4;
        int size = 2 * k + 1;
        vector <int> frequencyArray(size);
        for(auto number : nums)
            frequencyArray[number + k]++;
        int sum = 0;
        bool isEvenIndex = true;
        for(int index = 0; index < size - 1; index++) {
            while(frequencyArray[index]) {
                sum += isEvenIndex ? index - k : 0;
                isEvenIndex = !isEvenIndex;
                frequencyArray[index]--;
            }
        }
        return sum;
    }
};
~~~