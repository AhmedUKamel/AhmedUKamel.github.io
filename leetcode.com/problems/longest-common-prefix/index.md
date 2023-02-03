~~~cpp
class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        string lcp = strs[0];
        for(auto i : strs)
            if(i.length() < lcp.length())
                lcp = i;
        int len = lcp.length();
        if(!len) return "";
        for(int i = 0; i < strs.size(); i++){
            if(strs[i].substr(0, len) != lcp){
                if(!--len) break;
                lcp = lcp.substr(0, len);
                i = -1;
            } else if(strs[i].substr(0, len) == lcp && i == strs.size()-1)
                return lcp;
        }
        return "";
    }
};
~~~