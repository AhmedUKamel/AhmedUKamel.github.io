~~~cpp
class Solution {
public:
    bool checkString(string s, int l, int r) {
        while(l <= r)
            if(s[l] == s[r]) {l++; r--;}
            else return false;
        return true;
    }
    bool validPalindrome(string s) {
        int l = 0, r = s.size() - 1;
        while(l <= r)
            if(s[l] == s[r]) {l++; r--;}
            else
                if(checkString(s,l+1,r)) return true;
                else return checkString(s,l,r-1);
        return true;
    }
};
~~~
