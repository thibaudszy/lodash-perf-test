import { describe, it } from 'node:test';
import assert from 'assert';
import extend from 'lodash-es-with-subpaths/extend';

describe('extend', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof extend, function);
    });
});