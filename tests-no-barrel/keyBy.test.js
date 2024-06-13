import { describe, it } from 'node:test';
import assert from 'assert';
import keyBy from 'lodash-es-with-subpaths/keyBy';

describe('keyBy', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof keyBy, 'function');
    });
});