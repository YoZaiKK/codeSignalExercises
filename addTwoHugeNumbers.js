// Singly-linked lists are already defined with this interface:
function ListNode(x) {
	this.value = x;
	this.next = null;
}

function solution(a, b) {
  let aR = reverseList(a);
  let bR = reverseList(b);
	let carry =  0;
	let result = null;
	let curr = null;
	while (aR || bR || carry) {
		let sum = (aR ? aR.value : 0) + (bR ? bR.value : 0) + carry;
		carry = Math.floor(sum / 10000);
		sum = sum % 10000;
		if (!result) {
			result = new ListNode(sum);
			curr = result;
		} else {
			curr.next = new ListNode(sum);
			curr = curr.next;
		}
		aR = aR ? aR.next : null;
		bR = bR ? bR.next : null;
	}
	return reverseList(result);
}

function reverseList(list) {
	var prev = null;
	while (list) {
		temp = list.next;
		list.next = prev;
		prev = list;
		list = temp;
	}
	return prev;
}

let a = new ListNode(9876);
a.next = new ListNode(5432);
a.next.next = new ListNode(1234);
let b = new ListNode(1234);
b.next = new ListNode(9876);
b.next.next = new ListNode(5432);

let resultado = solution(a, b);
for (let curr = resultado; curr !== null; curr = curr.next) {
	console.log(curr.value);
}
