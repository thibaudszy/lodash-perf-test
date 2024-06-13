import { describe, it } from 'node:test';
import assert from 'assert';
import property from 'lodash-es-with-subpaths/property';

describe('property', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof property, 'function');
    });
});