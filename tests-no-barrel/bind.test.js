import { describe, it } from 'node:test';
import assert from 'assert';
import bind from 'lodash-es-with-subpaths/bind';

describe('bind', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof bind, 'function');
    });
});