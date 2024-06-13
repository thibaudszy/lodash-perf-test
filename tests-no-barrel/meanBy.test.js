import { describe, it } from 'node:test';
import assert from 'assert';
import meanBy from 'lodash-es-with-subpaths/meanBy';

describe('meanBy', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof meanBy, 'function');
    });
});