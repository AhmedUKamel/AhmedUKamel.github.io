~~~cpp
class Solution {
public:
    bool isChar(char c) {
        return ('a' <= c && c <= 'z') || ('A' <= c && c <= 'Z') || ('0' <= c && c <= '9');
    }
    char toLower(char c) {
        return (c < 'a') ? c + 32 : c;
    }
    bool isPalindrome(string s) {
        int l = 0, r = s.size() - 1;
        while(l < r) {
            if(!isChar(s[l])) {
                l++;
                continue;
            }
            if(!isChar(s[r])) {
                r--;
                continue;
            }
            if(toLower(s[l]) != toLower(s[r])) return false;
            l++; r--;
        }
        return true;
    }
};
~~~

~~~cpp
class Solution {
public:
    bool isPalindrome(string s) {
        int size = s.size();
        int index = 0;
        vector <char> filtered(size);
        for(auto ch : s)
            if(iswalnum(ch)) filtered[index++] = tolower(ch);
        size = index;
        index /= 2;
        for(int i = 0; i < index; i++)
            if(filtered[i] != filtered[size-i-1]) return false;
        return true;
    }
};
~~~
