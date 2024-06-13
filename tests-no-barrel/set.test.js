import { describe, it } from 'node:test';
import assert from 'assert';
import set from 'lodash-es-with-subpaths/set';

describe('set', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof set, 'function');
    });
});