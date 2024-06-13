import { describe, it } from 'node:test';
import assert from 'assert';
import { uniqBy } from 'lodash-es';

describe('uniqBy', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof uniqBy, function);
    });
});