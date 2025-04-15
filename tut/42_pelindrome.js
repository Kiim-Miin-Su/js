is_pelindrome = (str, left = 0, right = null) => {
    if (right === null) {
        right = str.length - 1;
    } else if (left >= right) {
        return true;
    } else if (str[left] !== str[right]) {
        return false;
    }
    return is_pelindrome(str, left + 1, right - 1);
}

