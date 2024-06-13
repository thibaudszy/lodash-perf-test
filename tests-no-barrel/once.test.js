import { describe, it } from 'node:test';
import assert from 'assert';
import once from 'lodash-es-with-subpaths/once';

describe('once', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof once, function);
    });
});