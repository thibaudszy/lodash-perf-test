import { describe, it } from 'node:test';
import assert from 'assert';
import initial from 'lodash-es-with-subpaths/initial';

describe('initial', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof initial, 'function');
    });
});