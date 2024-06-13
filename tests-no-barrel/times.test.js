import { describe, it } from 'node:test';
import assert from 'assert';
import times from 'lodash-es-with-subpaths/times';

describe('times', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof times, 'function');
    });
});