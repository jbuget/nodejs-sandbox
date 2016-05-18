const chai = require('chai');
const should = chai.should();
const LinkedList = require('../src/linkedlist').LinkedList;

describe('LinkedList', () => {

    describe('.length', () => {

        var list;

        beforeEach(() => {
            list = new LinkedList();
        });

        it('should be 0 when list contains no element', () => {
            // when
            var length = list.length;
            // then
            length.should.be.equal(0);
        });

        it('should be 1 when list contains a single element', () => {
            // given
            list.push(123);
            list.print();
            // when
            var length = list.length;
            // then
            length.should.be.equal(1);
        });

        it('should be 2 when list contains two elements', () => {
            // given
            list.push(123);
            list.push(456);
            // when
            var length = list.length;
            // then
            length.should.be.equal(2);
        });

        it('should be 3 when list contains three elements', () => {
            // given
            list.push(123);
            list.push(456);
            list.push(789);
            // when
            var length = list.length;
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
            var length = list.length;
            // then
            length.should.be.equal(4);
        });

    });

    describe('#push()', () => {

        var list;

        beforeEach(() => {
            list = new LinkedList();
        });

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

        var list;

        beforeEach(() => {
            list = new LinkedList();
        });

        it('should return true if the list contains no item', () => {
            // when
            var actual = list.isEmpty();

            // then
            actual.should.be.true;
        });

        it('should return false if the list contains some items', () => {
            // given
            list.push(123);

            // when
            var actual = list.isEmpty();

            // then
            actual.should.be.false;
        });
    });
});
