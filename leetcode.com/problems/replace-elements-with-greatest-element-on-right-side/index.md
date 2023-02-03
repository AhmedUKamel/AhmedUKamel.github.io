~~~cpp
class Solution {
public:
    vector<int> replaceElements(vector<int>& arr) {
        int i = arr.size();
        vector <int> v(i);
        v[i - 1] = -1;
        i -= 2;
        for(int c = arr.size() - 1; c > 0; c--) {
            v[i] = (v[i + 1] > arr[c]) ? v[i + 1] : arr[c];
            i--;
        }
        return v;
    }
};
~~~

~~~cpp
class Solution {
public:
    vector<int> replaceElements(vector<int>& arr) {
        for(int i = arr.size() - 2; i >= 0; i--) {
            arr[i] = (arr[i] > arr[i + 1]) ? arr[i] : arr[i + 1];
        }
        arr.push_back(-1);
        arr.erase(arr.begin());
        return arr;
    }
};
~~~

~~~cpp
class Solution {
public:
    vector<int> replaceElements(vector<int>& arr) {
        int n=arr.size(), tmp, mx=-1;
        for(int i=n-1; i>=0; i--) {
            tmp=arr[i];
            arr[i]=mx;
            mx=max(mx,tmp);
        }
        return arr;
    }
};
~~~