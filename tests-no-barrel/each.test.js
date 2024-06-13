import { describe, it } from 'node:test';
import assert from 'assert';
import each from 'lodash-es-with-subpaths/each';

describe('each', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof each, 'function');
    });
});