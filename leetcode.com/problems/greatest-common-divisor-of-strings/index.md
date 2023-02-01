~~~cpp
class Solution {
public:
    string gcdOfStrings(string str1, string str2) {
        
        int n1 = str1.size(), n2 = str2.size(), maxn = min(n1,n2);
        
        for(int i = maxn; i > 0; i--) {
            
            if(!(n1 % i) && !(n2 % i) && str1.substr(0,i) == str2.substr(0,i)) {
                
                string temp1 = str1.substr(i,n1-i) + str1.substr(0,i);
                string temp2 = str2.substr(i,n2-i) + str2.substr(0,i);
                
                if(temp1 == str1 && temp2 == str2) 
                    return str1.substr(0,i);
            }

        }
        
        return "";
        
    }
};
~~~