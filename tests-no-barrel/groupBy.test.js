import { describe, it } from 'node:test';
import assert from 'assert';
import groupBy from 'lodash-es-with-subpaths/groupBy';

describe('groupBy', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof groupBy, 'function');
    });
});