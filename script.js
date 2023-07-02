// complete the given function
function  checkPalindrome(str, start, end) {
		if (str.length <= 1){
			return true;
		}
		if(str[start] === str[end]){
			return checkPalindrome(str, start+1, end-1)
		} else { 
			return false
		}
}

function palindrome(str){
	let newStr = str.replace(/\s+/g, "");

	return checkPalindrome(newStr,0 , newStr.length-1);
}
module.exports = palindrome
