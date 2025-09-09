// function CountOccurences(string) {
//   const arrayOfStr = string.split("");
//   let result = {};
//   for (let i = 0; i < arrayOfStr.length; i++) {
//     if (arrayOfStr[i] in result) {
//       result[arrayOfStr[i]] += 1;
//     } else {
//       result[arrayOfStr[i]] = 1;
//     }
//   }
//   return result;
// }
// console.log(CountOccurences("hello"));

// function CountOccurences(string , ch) {
//   const arrayOfStr = string.split("");
//   let result = {};
//   for (let i = 0; i < arrayOfStr.length; i++) {
//     if (arrayOfStr[i] in result) {
//       result[arrayOfStr[i]] += 1;
//     } else {
//       result[arrayOfStr[i]] = 1;
//     }
//   }
//   return result[ch];
// }
// console.log(CountOccurences("hello" , "z"));

// function CountOccurences(string, ch) {
//   let count = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === ch) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(CountOccurences("hello", "l"));

// function CountOccurences(string, ch) {
//   console.log(string.length); // 9
//   console.log(string.split(ch)); //[ 'he', '', 'o ', '', 'a' ]
//   console.log(string.split(ch).length - 1); // 5
// }
// CountOccurences("b obo", "b");

// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };
// var twoSumO1 = function (nums, target) {
//   const numMap = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];
//     if (numMap.has(complement)) {
//       return [numMap.get(complement), i];
//     }
//     numMap.set(nums[i], i);
//   }
// };

// console.log(twoSumO1([2, 7, 11, 15], 9));
// console.log(twoSumO1([3,2,4] , 6))
// console.log(twoSumO1([3,3] , 6))

// var isPalindrome = function (x) {
//   const revertX = String(x).split("").reverse().join("");
//   if (x < 0) {
//     return false;
//   }
//   return x === Number(revertX);
// };
// var isPalindrome = function (x) {
//   if (x < 0) return false;
//   if (x > 0 && x < 10) return true;
//   let originalX = x;
//   let reverseX = 0;
//   while (x > 0) {
//     let digit = x % 10;
//     reverseX = reverseX * 10 + digit;
//     x = Math.floor(x / 10);
//   }
//   return originalX === reverseX;
// };
// var isPalindrome = function (x) {
//   var reverse = 0;
//   var copy = x;

//   while (copy > 0) {
//     const digit = copy % 10;
//     reverse = reverse * 10 + digit;
//     copy = ~~(copy / 10);
//   }

//   return reverse == x;
// };

// console.log(isPalindrome(1));

// این در جاوااسکریپت Bitwise NOT (عملگر بیتی NOT) هست.
// وقتی یک بار استفاده کنی (~)، همه بیت‌های عدد رو برعکس می‌کنه.
// اما وقتی دوبار پشت سر هم استفاده می‌کنی (~~)، در عمل کاری می‌کنه شبیه Math.trunc() (یعنی قسمت اعشاری رو حذف می‌کنه و فقط بخش صحیح رو نگه می‌داره).
///Math.floor is best solution
///on conditon best solustion
// var isPalindrome = function (x) {
//   if (x < 0) return false;
//   var reverse = 0;
//   var copy = x;

//   while (copy > 0) {
//     const digit = copy % 10;
//     reverse = reverse * 10 + digit;
//     copy = Math.floor(copy / 10);
//   }

//   return reverse == x;
// };

// var romanToInt = function (s) {
//   let numbers = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };
//   let total = 0;
//   let i = 0;
//   while (i < s.length) {
//     let curr = numbers[s[i]];
//     let next = numbers[s[i + 1]] ?? 0;
//     if (curr < next) {
//       total += next - curr;
//       i += 2;
//     } else {
//       total += curr;
//       i++;
//     }
//   }
//   return total;
// };

// var longestCommonPrefix = function (strs) {
//   let preFix = strs[0];
//   for (let i = 1; i < strs.length; i++) {
//     for (let j = 0; j < preFix.length; j++) {
//       if (strs[i][j] !== preFix[j]) {
//         preFix = preFix.slice(0, j);
//         break;
//       }
//     }
//   }
//   return preFix;
// };
// console.log(longestCommonPrefix(["flower", "flow", "flight"]));
// var isValid = function (s) {
//   let stack = [];
//   let map = {
//     ")": "(",
//     "]": "[",
//     "}": "{",
//   };

//   for (let char of s) {
//     if (char in map) {
//       let top = stack.pop();
//       if (top !== map[char]) {
//         return false;
//       }
//     } else {
//       stack.push(char);
//     }

//   }
//   return stack.length === 0;
// };
var isValid = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    switch (c) {
      case "(":
        stack.push(")");
        break;
      case "[":
        stack.push("]");
        break;
      case "{":
        stack.push("}");
        break;
      default:
        if (c !== stack.pop()) {
          return false;
        }
    }
  }

  return stack.length === 0;
};
// تست‌ها
// console.log(isValid("()[]{}"));  // true
// console.log(isValid("()"));      // true
// console.log(isValid("(]"));      // false
// console.log(isValid("([])"));    // true
// console.log(isValid("([)]"));    // false

// class ListNode {
//   constructor(val = 0, next = null) {
//     this.val = val;
//     this.next = next;
//   }
// }
// var mergeTwoLists = function (list1, list2) {
//   let dummyNode = new ListNode(-1);
//   let temp = dummyNode;

//   let curr1 = list1,
//     curr2 = list2;

//   while (curr1 !== null && curr2 !== null) {
//     if (curr1.val < curr2.val) {
//       temp.next = curr1;
//       curr1 = curr1.next;
//     } else {
//       temp.next = curr2;
//       curr2 = curr2.next;
//     }
//     temp = temp.next;
//   }

//   // Attach the remaining nodes
//   temp.next = curr1 !== null ? curr1 : curr2;

//   return dummyNode.next;
// };

// function arrayToList(arr) {
//   let dummy = new ListNode();
//   console.log(dummy, "dummy");
//   let curr = dummy;
//   console.log(curr, "curr");
//   for (let num of arr) {
//     curr.next = new ListNode(num);
//     console.log(curr.next, "curr.next");
//     curr = curr.next;
//     console.log(curr, "currrrrr");
//   }
//   return dummy.next;
// }
// let l1 = arrayToList([1, 2, 4]);
// let l2 = arrayToList([1, 3, 4]);
// console.log(arrayToList([1, 2, 4]), " arrayToList([1, 2, 4])");
// console.log(mergeTwoLists(l1, l2));
// 1. Linked List چیه؟

// 🔹 آرایه (Array) رو بلدی دیگه: یه لیست از خونه‌های پشت سر هم تو حافظه.
// ولی Linked List فرق داره:

// هر خونه (بهش میگیم Node) شامل داده (value) و یک آدرس (next) هست.

// این آدرس نشون میده که بعد از این نود، کدوم نود دیگه بیاد.

// مثال تصویری:

// [10 | next] → [20 | next] → [30 | next] → null

// یعنی یه لیست با مقادیر 10، 20، 30.

// 📌 2. چرا به Linked List نیاز داریم؟

// مزیت‌ها:

// اضافه/حذف کردن راحت: فقط کافی آدرس‌ها رو عوض کنیم، لازم نیست مثل آرایه همه چیز جابه‌جا بشه.

// انعطاف‌پذیرتر از آرایه چون لازم نیست از قبل سایز مشخص کنیم.

// عیب‌ها:

// دسترسی تصادفی نداره!
// تو آرایه arr[5] مستقیم میشه، ولی تو لینک‌لیست باید از اول شروع کنیم و قدم به قدم بریم.

// 📌 3. تعریف در جاوااسکریپت

// هر نود یه کلاس ساده‌ست:

// class ListNode {
//     constructor(val = 0, next = null) {
//         this.val = val;   // مقدار
//         this.next = next; // اشاره‌گر به نود بعدی
//     }
// }

// 📌 4. ساختن یک Linked List ساده

// فرض کن میخوای لیست [1 → 2 → 3] بسازی:

// let node3 = new ListNode(3, null);   // آخر لیست
// let node2 = new ListNode(2, node3);  // اشاره میکنه به 3
// let node1 = new ListNode(1, node2);  // اشاره میکنه به 2

// console.log(node1);

// خروجی چیزی شبیه این میشه:

// ListNode {
//   val: 1,
//   next: ListNode {
//     val: 2,
//     next: ListNode {
//       val: 3,
//       next: null
//     }
//   }
// }

// 📌 5. تبدیل آرایه به Linked List

// برای راحتی معمولا اینو می‌سازیم:

// function arrayToList(arr) {
//     let dummy = new ListNode();
//     let curr = dummy;
//     for (let num of arr) {
//         curr.next = new ListNode(num);
//         curr = curr.next;
//     }
//     return dummy.next;
// }

// مثال:

// let list = arrayToList([1,2,3]);
// console.log(list);

// 📌 6. پیمایش Linked List

// یعنی یکی یکی از نودها بریم جلو:

// function traverse(list) {
//     let curr = list;
//     while (curr !== null) {
//         console.log(curr.val);
//         curr = curr.next;
//     }
// }

// class ListNode {
//   constructor(value = 0, next = null) {
//     this.value = value;
//     this.next = next;
//   }
// }
// let node3 = new ListNode(3, null);
// let node2 = new ListNode(2, node3);
// let node1 = new ListNode(1, node2);

// function arrayToList(arr) {
//   let dummy = new ListNode();
//   let cur = dummy;
//   for (let num in arr) {
//     cur.next = new ListNode(num);
//     cur = cur.next;
//   }
//   return dummy.next;
// }
// function traverse(list) {
//   let cur = list;
//   while (cur !== null) {
//     console.log(cur.value);
//     cur = cur.next;
//   }
// }
// function listToArray(list) {
//   let arr = [];
//   let cur = list;
//   while (cur !== null) {
//     arr.push(cur.value);
//     cur = cur.next;
//   }
//   return arr;
// }
// var mergeTwoLists = function (list1, list2) {
//   let dummyNode = new ListNode(-1);
//   let temp = dummyNode;

//   let curr1 = list1,
//     curr2 = list2;

//   while (curr1 !== null && curr2 !== null) {
//     if (curr1.val < curr2.val) {
//       temp.next = curr1;
//       curr1 = curr1.next;
//     } else {
//       temp.next = curr2;
//       curr2 = curr2.next;
//     }
//     temp = temp.next;
//   }

//   temp.next = curr1 !== null ? curr1 : curr2;

//   return dummyNode.next;
// };
// Array.prototype.myMap = function (callback) {
//   const result = [];
//   for (let i = 0; i < this.length; i++) {
//     if (i in this) {
//       console.log(i ,'i')
//       result.push(callback(this[i], i, this));
//     }
//   }

//   return result;
// };
// const arr = [1, 2, 3, 4];

// const doubled = arr.myMap((item, index, array) => {
//   return item * 2;
// });

// console.log(doubled); // [2, 4, 6, 8]
// var removeDuplicates = function (nums) {
//   if (nums.length <= 0) return 0;

//   let k = 1;

//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] !== nums[i - 1]) {
//       nums[k] = nums[i];
//       k++;
//     }
//   }
//   return k;
// };

// const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// const k = removeDuplicates(nums);
// console.log(k, [...nums.slice(0, k) , ...nums.slice(k).map(()=> "-")]);
// var removeElement = function (nums, val) {
//   let k = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== val) {
//       nums[k] = nums[i];
//       k++;
//     }
//   }
//   return k;
// };
// const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// const k = removeElement(nums, 2);
// console.log(k, [...nums.slice(0, k), ...nums.slice(k).map(() => "-")]);
// var strStr = function(haystack, needle) {
//     return haystack.indexOf(needle)
// };
var strStr = function (haystack, needle) {
    let haystackLength = haystack.length;
    let needleLength = needle.length;
    if (haystackLength < needleLength) return -1;

    let matchingIndex = 0;
    for (let i = 0; i < haystackLength; i++) {
        if (needle[i - matchingIndex] !== haystack[i]) {
            i = matchingIndex;
            matchingIndex = i + 1;
        } else if (i - matchingIndex == needleLength - 1) {
            return matchingIndex;
        }
    }
    return -1;
};
console.log(strStr("sadbutsad" , "sad"))
console.log(strStr("leetcode" , "leeto"))