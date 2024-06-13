import { describe, it } from 'node:test';
import assert from 'assert';
import uniqueId from 'lodash-es-with-subpaths/uniqueId';

describe('uniqueId', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof uniqueId, function);
    });
});