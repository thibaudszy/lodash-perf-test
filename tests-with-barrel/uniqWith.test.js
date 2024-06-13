import { describe, it } from 'node:test';
import assert from 'assert';
import { uniqWith } from 'lodash-es';

describe('uniqWith', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof uniqWith, 'function');
    });
});