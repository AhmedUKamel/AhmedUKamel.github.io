~~~cpp
class Solution {
public:
    bool isBalloonChar(char c) {
        return c == 'b' || c == 'a' || c == 'l' || c == 'o' || c == 'n';
    }
    int appears(char c) {
        return c == 'b' || c == 'a' || c == 'n' ? 1 : 2;
    }
    int maxNumberOfBalloons(string text) {
        int MNB = INT_MAX;
        vector <int> frequencyArray(26);
        for(auto character : text)
            frequencyArray[character - 'a']++;
        for(int index = 0; index < 26; index++) {
            char character = index + 'a';
            if(isBalloonChar(character)) {
                int f = frequencyArray[character - 'a'];
                MNB = min(MNB,f / appears(character));
            }
        }
        return MNB;
    }
};
~~~

~~~cpp
class Solution {
public:
    int maxNumberOfBalloons(string text) {
        vector <int> frequency(26);
        for(auto character : text)
            frequency[character - 'a']++;
        return min(frequency['b' - 'a'],
               min(frequency['a' - 'a'],
               min(frequency['l' - 'a']/2,
               min(frequency['o' - 'a']/2,
                   frequency['n' - 'a']))));
    }
};
~~~