/*
Balanced Parenthesis
Given a string, return true if it contains balanced parentheses ().

isBalanced("(x + y) - (4)")	// true
isBalanced("(((10 ) ()) ((?)(:)))")	// true
isBalanced("(50)(")	// false
isBalanced("") //	true
*/

let isBalanced = function(str) {
    let expression = {
        '(':0,
        '[':0,
        '{':0,
        ')':0,
        ']':0,
        '{':0
    }
    for(let i = 0; i < str.length; i++) {
        let char = str[i];
        for(var key in expression) {
            if(key === char) {
               expression[key]++;
            }
        } 
    }
    let a = true;
    let b = true;
    let c = true;
    if(expression['('] !== 0 && expression[')'] !== 0 && expression['('] !== expression[')']) {
        a = false;
    }
    if(expression['['] !== 0 && expression[']'] !== 0 && expression['['] !== expression[']']) {
        b = false;
    }
    if(expression['{'] !== 0 && expression['}'] !== 0 && expression['{'] !== expression['}']) {
        c = false;
    }
    console.log(expression)
    return a && b && c;
};