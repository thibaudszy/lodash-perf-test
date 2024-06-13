import { describe, it } from 'node:test';
import assert from 'assert';
import union from 'lodash-es-with-subpaths/union';

describe('union', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof union, 'function');
    });
});