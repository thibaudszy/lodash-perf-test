import { describe, it } from 'node:test';
import assert from 'assert';
import spread from 'lodash-es-with-subpaths/spread';

describe('spread', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof spread, 'function');
    });
});