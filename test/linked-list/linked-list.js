'use strict';

const assert = require('assert');

const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null; // todo: make private, add `next` method or "iterable" interface?
    }

    insertHead(data) {
        let previous = this.head;
        this.head = new SinglyLinkedListNode(data);

        if (previous != null)
            this.head.next = previous;
    }

    insertTail(data) {
        if (this.head == null) {
            this.head = new SinglyLinkedListNode(data)
            return;
        }

        let node = this.head;
        while (node.next != null) {
            // infinite loop, circular reference?
            node = node.next; // peek
        }

        node.next = new SinglyLinkedListNode(data);
    }

    insertAt_old(data, position) {
        let insert = new SinglyLinkedListNode(data);  // create new "1.5"

        if (position == 0) {
            let previous = this.head;
            this.head = insert;
            this.head.next = previous;
            return;
        }

        let parent = this.head; // position pointer in linked list

        // todo: handle position > max size
        for (let counter = 1; counter <= position; counter++) {
            // counter 1 = insert = "two";      parent = "one"
            // counter 2 = insert = "three";    parent = "two"
            // counter 3 = insert = "four";     parent = "three"

            // insert "1.5" at position 1
            // move "two" to next of "1.5"
            if (counter == position) {
                //if 1 == 1 (insert 1.5 at 1; move "two" as next of 1.5)
                let child = parent.next;    // break chain; record "two" as child; child will be attached to the new insert node
                parent.next = insert;       // attach "1.5" to "one"
                insert.next = child;        // attach "two" to "1.5"
            }

            parent = parent.next; // move pointer to next node
        }
    }

    insertAt(value, position) {
        let insert = new SinglyLinkedListNode(value);
        if (position == 0) {
            insert.next = this.head;
            this.head = insert;
            return
        }

        // iterate to "just before" requested insert point
        // insert happens at parent.next
        let parent = this.head;
        let max = position - 1;
        for (let counter = 0; counter < max; counter++) {
            parent = parent.next
        }

        let child = parent.next;    // break chain; record "two" as child; child will be attached to the new insert node
        insert.next = child;        // attach "two" to "1.5"
        parent.next = insert;       // attach "1.5" to "one"
    }

    remove(position) {
        /*
        0 = { data: "one", next: "1.5" }
        1 = { data: "1.5", next: "two" }
        2 = { data: "two", next: null }

        delete "1" steps:
        - iterate nodes until position = 1
        - current = { data: "1.5", next: "two" }
        - take current.next (which is "two")

        delete node "1.5"
        change node "one"'s next value to "two"

        */
        let max = position - 1;
        for (let counter = 0; counter < max; counter++) {

        }
    }
};



describe('SinglyLinkedList', () => {
    describe('#insertHead', () => {
        it('inserts at head', () => {
            let list = new SinglyLinkedList();
            list.insertHead("item 1");
            list.insertHead("item 2");
            list.insertHead("item 3");

            assert.equal(list.head.data, "item 3");
            assert.equal(list.head.next.data, "item 2");
            assert.equal(list.head.next.next.data, "item 1");
        });
    });

    describe('#insertTail', () => {
        it('inserts at tail', () => {
            let list = new SinglyLinkedList();
            list.insertTail("item 1");
            list.insertTail("item 2");
            list.insertTail("item 3");

            assert.equal(list.head.data, "item 1");
            assert.equal(list.head.next.data, "item 2");
            assert.equal(list.head.next.next.data, "item 3");
        });
    });

    describe('#insertAt', () => {
        it('inserts at 0', () => {
            let list = new SinglyLinkedList();
            list.insertTail("item 1");
            list.insertAt("item 2", 0);

            assert.equal(list.head.data, "item 2");
            assert.equal(list.head.next.data, "item 1");
        });

        it('inserts at 1', () => {
            let list = new SinglyLinkedList();
            list.insertTail("1");
            list.insertTail("2");
            list.insertTail("3");
            list.insertAt("1.5", 1);

            assert.equal(list.head.data, "1");
            assert.equal(list.head.next.data, "1.5");
            assert.equal(list.head.next.next.data, "2");
            assert.equal(list.head.next.next.next.data, "3");
        });

        it('inserts at end', () => {
            let list = new SinglyLinkedList();
            list.insertTail("1");
            list.insertTail("2");
            list.insertAt("3", 2);

            assert.equal(list.head.data, "1");
            assert.equal(list.head.next.data, "2");
            assert.equal(list.head.next.next.data, "3");
        });
    });
});
