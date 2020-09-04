//Javascript solution published in Java

class Solution {
    public boolean isPalindrome(int x) {
        int temp = Math.abs(x);
        int result = 0;
        
        while (temp > 0) {
            result = (result * 10) + (temp % 10);
            temp = temp / 10;
        }
        
        return result == x;
    }
}