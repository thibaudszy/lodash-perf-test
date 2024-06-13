import { describe, it } from 'node:test';
import assert from 'assert';
import endsWith from 'lodash-es-with-subpaths/endsWith';

describe('endsWith', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof endsWith, 'function');
    });
});