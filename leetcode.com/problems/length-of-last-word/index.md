~~~cpp
class Solution {
public:
    int lengthOfLastWord(string s) {
        auto it = s.rbegin();
        while(*it == ' ') it++;
        int sum = 0;
        while(*it != ' ' && it != s.rend()) {
            sum++;
            it++;
        } 
        return sum;
    }
};
~~~

~~~cpp
class Solution {
public:
    int lengthOfLastWord(string s) {
        int sum = 0;
        for(int i = s.size() - 1; i >= 0; i--)
            if(s[i] != ' ') sum++;
            else if (sum) return sum;
        return sum;
    }
};
~~~