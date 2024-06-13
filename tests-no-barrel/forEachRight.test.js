import { describe, it } from 'node:test';
import assert from 'assert';
import forEachRight from 'lodash-es-with-subpaths/forEachRight';

describe('forEachRight', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof forEachRight, function);
    });
});