import { describe, it } from 'node:test';
import assert from 'assert';
import { uniqBy } from 'lodash-es';

describe('uniqBy', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof uniqBy, 'function');
    });
});