import { describe, it } from 'node:test';
import assert from 'assert';
import minBy from 'lodash-es-with-subpaths/minBy';

describe('minBy', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof minBy, 'function');
    });
});