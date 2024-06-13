import { describe, it } from 'node:test';
import assert from 'assert';
import capitalize from 'lodash-es-with-subpaths/capitalize';

describe('capitalize', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof capitalize, 'function');
    });
});