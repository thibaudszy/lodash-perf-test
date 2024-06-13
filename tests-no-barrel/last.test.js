import { describe, it } from 'node:test';
import assert from 'assert';
import last from 'lodash-es-with-subpaths/last';

describe('last', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof last, 'function');
    });
});