import { describe, it } from 'node:test';
import assert from 'assert';
import truncate from 'lodash-es-with-subpaths/truncate';

describe('truncate', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof truncate, 'function');
    });
});