~~~cpp
class Solution {
public:
    bool isAnagram(string s, string t) {
        map<int,int>map;
        if(s.size()>t.size())swap(s,t);
        int i;
        for(i=0;i<s.size();i++) {
            map[s[i]]++;
            map[t[i]]--;
        }
        for(;i<t.size();i++)map[t[i]]--;
        for(auto i:map)if(i.second)return false;
        return true;
    }
};
~~~

~~~cpp
class Solution {
public:
    bool isAnagram(string s, string t) {
        vector<int>v(26);
        if(s.size()>t.size())swap(s,t);
        int i;
        for(i=0;i<s.size();i++) {
            v[s[i]-'a']++;
            v[t[i]-'a']--;
        }
        for(;i<t.size();i++) {
            v[t[i]-'a']--;
        }
        for(auto i:v)if(i)return false;return true;
    }
};
~~~

~~~cpp
class Solution {
public:
    bool isAnagram(string s, string t) {
        sort(s.begin(),s.end());
        sort(t.begin(),t.end());
        return s==t;
    }
};
~~~

~~~cpp
class Solution {
public:
    bool isAnagram(string s, string t) {
        if(s.size() != t.size())
            return false;
        vector<int>v(26);
        for(int i=0;i<s.size();i++) {
            v[s[i]-'a']++;
            v[t[i]-'a']--;
        }
        for(vector<int>::iterator it=v.begin();it!=v.end(); it++)
            if(*it)
                return false;
        return true;
    }
};
~~~