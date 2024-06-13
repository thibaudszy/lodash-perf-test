import { describe, it } from 'node:test';
import assert from 'assert';
import { pullAllBy } from 'lodash-es';

describe('pullAllBy', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof pullAllBy, 'function');
    });
});