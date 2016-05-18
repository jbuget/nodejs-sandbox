'use strict';

const chai = require('chai');
const should = chai.should();
const LinkedList = require('../src/linkedlist').LinkedList;

describe('LinkedList', () => {

    var list;

    beforeEach(() => {
        list = new LinkedList();
    });

    describe('.length', () => {

        it('should be 0 when list contains no element', () => {
            // when
            let length = list.length;
            // then
            length.should.be.equal(0);
        });

        it('should be 1 when list contains a single element', () => {
            // given
            list.push(123);
            list.print();
            // when
            let length = list.length;
            // then
            length.should.be.equal(1);
        });

        it('should be 2 when list contains two elements', () => {
            // given
            list.push(123);
            list.push(456);
            // when
            let length = list.length;
            // then
            length.should.be.equal(2);
        });

        it('should be 3 when list contains three elements', () => {
            // given
            list.push(123);
            list.push(456);
            list.push(789);
            // when
            let length = list.length;
            // then
            length.should.be.equal(3);
        });

        it('should be 4 when list contains four elements', () => {
            // given
            list.push(123);
            list.push(456);
            list.push(789);
            list.push(101112);
            // when
            let length = list.length;
            // then
            length.should.be.equal(4);
        });

    });

    describe('#push()', () => {

        it ('should have length of 1 after one push', () => {
            // when
            list.push(123);
            // then
            list.length.should.be.equal(1);
        });

        it ('should have length of 2 after two pushes', () => {
            // when
            list.push(123);
            list.push(456);
            // then
            list.length.should.be.equal(2);
        });

        it ('should have length of 3 after three pushes', () => {
            // when
            list.push(123);
            list.push(456);
            list.push(789);
            // then
            list.length.should.be.equal(3);
        });

        it ('should have length of 4 after four pushes', () => {
            // when
            list.push(123);
            list.push(456);
            list.push(789);
            list.push(101112);
            // then
            list.length.should.be.equal(4);
        });

    });

    describe('#isEmpty()', () => {

        it('should return true if the list contains no item', () => {
            // when
            let actual = list.isEmpty();

            // then
            actual.should.be.true;
        });

        it('should return false if the list contains some items', () => {
            // given
            list.push(123);

            // when
            let actual = list.isEmpty();

            // then
            actual.should.be.false;
        });
    });

    describe('#pop()', () => {

        it ('should return null when list is empty', () => {
            // when
            let actual = list.pop();
            // then
            should.not.exist(actual);
        });

        it ('should remove and return the ultimate element when list contains only 1 element', () => {
            // given
            list.push(123);
            // when
            let actual = list.pop();
            // then
            actual.data.should.be.equal(123);
            list.length.should.be.equal(0);
            should.not.exist(list.head);
        });

        it ('should remove and return the last element when list contains more than 1 element', () => {
            // given
            list.push(123);
            list.push(456);
            list.push(789);
            // when
            let actual = list.pop();
            // then
            actual.data.should.be.equal(789);
            list.length.should.be.equal(2);
        });
    });
});
