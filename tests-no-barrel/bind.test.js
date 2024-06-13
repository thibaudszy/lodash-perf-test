import { describe, it } from 'node:test';
import assert from 'assert';
import bind from 'lodash-es-with-subpaths/bind';

describe('bind', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof bind, function);
    });
});