import { describe, it } from 'node:test';
import assert from 'assert';
import compact from 'lodash-es-with-subpaths/compact';

describe('compact', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof compact, 'function');
    });
});