import { describe, it } from 'node:test';
import assert from 'assert';
import toLower from 'lodash-es-with-subpaths/toLower';

describe('toLower', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof toLower, 'function');
    });
});