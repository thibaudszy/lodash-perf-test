import { describe, it } from 'node:test';
import assert from 'assert';
import result from 'lodash-es-with-subpaths/result';

describe('result', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof result, 'function');
    });
});