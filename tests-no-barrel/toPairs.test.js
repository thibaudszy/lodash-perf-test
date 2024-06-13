import { describe, it } from 'node:test';
import assert from 'assert';
import toPairs from 'lodash-es-with-subpaths/toPairs';

describe('toPairs', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof toPairs, 'function');
    });
});