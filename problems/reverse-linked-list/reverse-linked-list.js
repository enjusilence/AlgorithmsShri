// https://leetcode.com/problems/reverse-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

export function reverseList(head) {
  let endNode;

  reverseNode(head);

  function reverseNode(node, parent) {
    if (node.next) {
      reverseNode(node.next, node)
    } else {
      endNode = node;
    }
    node.next = parent;
  }
  return endNode;
}
