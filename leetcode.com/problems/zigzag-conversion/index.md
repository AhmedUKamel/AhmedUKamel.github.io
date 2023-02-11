~~~cpp
class Solution {
public:
    string convert(string s, int numRows) {
        if(s.size() <= numRows || numRows == 1) return s;
        vector <string> zigzag_rows_strings(numRows);
        int row = 0;
        for(auto character : s) {
            zigzag_rows_strings[abs(row)].push_back(character);
            if(row == numRows - 1)
                row = -row;
            row++;
        }
        string output_string = "";
        for(auto row_string : zigzag_rows_strings)
            output_string += row_string;
        return output_string;
    }
};
~~~

~~~cpp
class Solution {
public:
    string convert(string s, int numRows) {
        int size = s.size(), rows = numRows;
        if(rows == 1 || size <= rows)
            return s;
        int step = 2 * rows - 2;
        string result;
        for(int row = 0; row < rows; row++)
            for(int col = 0; row + col < size; col += step) {
                result.push_back(s[row + col]);
                int index = (col + step - row);
                if(row != 0 && row != rows - 1 && index < size)
                    result.push_back(s[index]);
            }
        return result;
    }
};
~~~