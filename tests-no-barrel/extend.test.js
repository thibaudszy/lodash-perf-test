import { describe, it } from 'node:test';
import assert from 'assert';
import extend from 'lodash-es-with-subpaths/extend';

describe('extend', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof extend, 'function');
    });
});