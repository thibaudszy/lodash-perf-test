import { describe, it } from 'node:test';
import assert from 'assert';
import takeWhile from 'lodash-es-with-subpaths/takeWhile';

describe('takeWhile', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof takeWhile, function);
    });
});