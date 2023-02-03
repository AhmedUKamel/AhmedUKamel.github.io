~~~cpp
class Solution {
public:
    bool isSubsequence(string s, string t) {
        
        if(t.size() < s.size()) return false;
        
        auto i = t.begin();
        auto k = s.begin();

        while(i != t.end() && k != s.end()) {
            if(*i == *k) k++;
            i++;
        }

        return k == s.end();
    }
};
~~~