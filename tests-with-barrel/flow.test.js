import { describe, it } from 'node:test';
import assert from 'assert';
import { flow } from 'lodash-es';

describe('flow', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof flow, 'function');
    });
});