import { describe, it } from 'node:test';
import assert from 'assert';
import times from 'lodash-es-with-subpaths/times';

describe('times', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof times, function);
    });
});