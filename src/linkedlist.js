'use strict';

class Node {

    constructor(data, next) {
        this._data = data;
        this._next = next || null;
    }

    get data() { return this._data; }

    get next() { return this._next; }
    set next(node) { this._next = node; }

}

class LinkedList {

    constructor() {
        this._head = null; // Node
    }

    get head() { return this._head; }

    get length() {
        if (this._head === null) {
            return 0;
        }
        let length = 0;
        let node = this._head;
        while (node !== null) {
            length++;
            node = node.next;
        }
        return length;
    }

    isEmpty() {
        return this._head === null;
    }

    print() {
        if (this._head === null) {
            console.log('The list contains no element');
        } else {
            let index = 0;
            let node = this._head;
            while (node !== null) {
                console.log('List[' + index++ + ']: ' + node.data);
                node = node.next;
            }
        }
    }

    // add last
    push(value) {
        if (this._head === null) {
            this._head = new Node(value);
        } else {
            let node = this._head;
            if (node.next === null) {
                node.next = new Node(value);
            } else {
                while (node.next !== null) {
                    node = node.next;
                }
                node.next = new Node(value);
            }
        }
    }

    // poll last
    pop() {

    }

    // poll first
    shift() {

    }

    // add first
    unshift(value) {

    }

};

module.exports.Node = Node;
module.exports.LinkedList = LinkedList;
