import { describe, it } from 'node:test';
import assert from 'assert';
import padStart from 'lodash-es-with-subpaths/padStart';

describe('padStart', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof padStart, 'function');
    });
});