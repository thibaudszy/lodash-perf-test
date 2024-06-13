import { describe, it } from 'node:test';
import assert from 'assert';
import ceil from 'lodash-es-with-subpaths/ceil';

describe('ceil', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof ceil, 'function');
    });
});