// Singly-linked lists are already defined with this interface:
function ListNode(x) {
  this.value = x;
  this.next = null;
}
// Given two singly linked lists sorted in non-decreasing order, your task is to merge them. In other words, return a singly linked list, also sorted in non-decreasing order, that contains the elements from both original lists.
function solution(l1, l2) {
  let result = new ListNode(0)
  result.next = null
  let curr = result
  while(l1 || l2) {
    if(l1 && l2){
      if(l1.value <= l2.value){
        curr.next = l1
        l1 = l1.next
      } else {
        curr.next = l2
        l2 = l2.next
      }
    }else if(l1){
      curr.next = l1
      l1 = l1.next
    }else if(l2){
      curr.next = l2
      l2 = l2.next
    }
    curr = curr.next
    
  }
   
  return curr.next 
}