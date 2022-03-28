// @algorithm @lc id=2 lang=typescript
// @title add-two-numbers
import * as a from 'algm'
// @test([2,4,3],[5,6,4])=[7,0,8]
// @test([0],[0])=[0]
// @test([9,9,9,9,9,9,9],[9,9,9,9])=[8,9,9,9,0,0,0,1]
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let head = new ListNode();
  const dummy = head;
  let carry = 0;
  while (l1 || l2) {
    const v1 = l1 ? l1.val : 0;
    const v2 = l2 ? l2.val : 0;
    const bit = (v1 + v2 + carry) % 10;
    carry = Math.floor((v1 + v2 + carry) / 10);
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
    head.next = new ListNode(bit);
    head = head.next;
  }
  if (carry > 0) {
    head.next = new ListNode(carry);
  }
  return dummy.next;
}
