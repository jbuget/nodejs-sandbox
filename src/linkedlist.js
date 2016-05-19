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

    pop() {
        if (this._head === null) {
            return null;
        }
        let node = this._head;
        if (node.next === null) {
            this._head = null;
            return node;
        } else {
            while (node.next.next !== null) {
                node = node.next;
            }
            let result = node.next;
            node.next = null;
            return result;
        }
    }

    // poll first
    shift() {
        if (this._head === null) {
            return null;
        }
        let node = this._head;
        this._head = node.next;
        return node;
    }

    // add first
    unshift(value) {
        let node = new Node(value, this._head);
        this._head = node;
    }

};

module.exports.LinkedList = LinkedList;
