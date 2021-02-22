/**
 * 20. 有效的括号
 */

/**
 * 算法原理
 * 栈先入后出特点恰好与本题括号排序特点一致，即若遇到左括号入栈，遇到右括号时将对应栈顶左括号出栈，则遍历完所有括号后 stack 仍然为空；
 * 建立哈希表 dic 构建左右括号对应关系：key 左括号，value 右括号；这样查询 2 个括号是否对应只需 O(1) 时间复杂度；
 * 建立栈 stack，遍历字符串 s 并按照算法流程一一判断。
 */

/**
 * 算法流程
 * 1.如果 c 是左括号，则入栈 pushpush；
 * 2.否则通过哈希表判断括号对应关系，若 stack 栈顶出栈括号 stack.pop() 与当前遍历括号 c 不对应，则提前返回 false。
 */

/**
 * 提前返回 false
 * 提前返回优点： 在迭代过程中，提前发现不符合的括号并且返回，提升算法效率。
 * 解决边界问题：
 *   1.栈 stack 为空： 此时 stack.pop() 操作会报错；(js不会报错, 会返回undefined)
 *     因此，我们采用一个取巧方法，给 stack 赋初值 ? ，并在哈希表 dic 中建立 key: '?'，value: '?'的对应关系予以配合。
 *     此时当 stack 为空且 c 为右括号时，可以正常提前返回 false
 *   2.字符串 s 以左括号结尾： 此情况下可以正常遍历完整个 s，但 stack 中遗留未出栈的左括号；因此，最后需返回 len(stack) == 1，以判断是否是有效的括号组合
 */

/**
 * 复杂度分析
 * 时间复杂度 O(N)：正确的括号组合需要遍历 1 遍 s
 * 空间复杂度 O(N)：哈希表和栈使用线性的空间大小
 */


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const left = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    const stack = []
    for (let i = 0; i < s.length; i++) {
        if (left[s[i]]) {
            stack.push(s[i])
        } else {
            const c = stack.pop()
            if (left[c] !== s[i]) {
                return false
            }
        }
    }
    return stack.length === 0
};

console.log(isValid('{[()]}'))
