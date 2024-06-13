import { describe, it } from 'node:test';
import assert from 'assert';
import toLower from 'lodash-es-with-subpaths/toLower';

describe('toLower', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof toLower, function);
    });
});