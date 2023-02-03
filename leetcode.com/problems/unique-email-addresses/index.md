~~~cpp
class Solution {
public:
    int numUniqueEmails(vector<string>& emails) {
        unordered_set <string> unique_emails;
        string temp_email;
        bool isAfterPlus,isAfterAt;

        for(auto email : emails) {
            
            temp_email = "";
            isAfterPlus = false;
            isAfterAt = false;

            for(auto character : email)
                if(character == '@') {
                    isAfterAt = true;
                    temp_email.push_back(character);
                }
                else if(character == '+' && !isAfterAt) 
                    isAfterPlus = true;
                else if(isAfterAt || !isAfterPlus && character != '.')
                    temp_email.push_back(character);
            
            unique_emails.insert(temp_email);
        }

        return unique_emails.size();
    }
};
~~~