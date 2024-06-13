import { describe, it } from 'node:test';
import assert from 'assert';
import flatMap from 'lodash-es-with-subpaths/flatMap';

describe('flatMap', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof flatMap, 'function');
    });
});