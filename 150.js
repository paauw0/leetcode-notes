/*
 * 150. 逆波兰表达式求值 https://leetcode-cn.com/problems/evaluate-reverse-polish-notation/
 */

/*
 * 适合用栈操作运算：遇到数字则入栈；遇到算符则取出栈顶两个数字进行计算，并将结果压入栈中
 */


/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    function count(a, b, type) {
        switch (type) {
            case "+":
                return parseInt(+a + +b) 
            case "-":
                return parseInt(+a - +b) 
            case "*":
                return parseInt(+a * +b)
            case "/":
                return parseInt(+a / +b) 
            default:
                return
        }
    }
    const stack = []
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] && !Number.isNaN(+tokens[i])) {
            stack.push(tokens[i])
        } else {
            const a = stack.pop()
            const b = stack.pop()
            stack.push(count(b, a, tokens[i]))
        }
    }
    return stack[0]
};

console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]))
