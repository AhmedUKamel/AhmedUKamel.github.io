~~~cpp
class Solution {
public:
    bool canPlaceFlowers(vector<int>& flowerbed, int n) {
        if(n == 0) return true;
        int N = flowerbed.size();
        for(int index = 0; index < N; index++)
            if(flowerbed[index] == 0 &&
            (index == 0   || flowerbed[index-1] == 0) &&
            (index == N-1 || flowerbed[index+1] == 0)) {
                flowerbed[index] = 1;
                if(--n == 0) return true;
            }
        return false;        
    }
};
~~~