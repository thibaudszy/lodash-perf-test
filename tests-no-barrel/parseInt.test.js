import { describe, it } from 'node:test';
import assert from 'assert';
import parseInt from 'lodash-es-with-subpaths/parseInt';

describe('parseInt', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof parseInt, 'function');
    });
});