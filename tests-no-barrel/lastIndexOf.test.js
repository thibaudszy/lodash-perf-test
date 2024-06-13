import { describe, it } from 'node:test';
import assert from 'assert';
import lastIndexOf from 'lodash-es-with-subpaths/lastIndexOf';

describe('lastIndexOf', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof lastIndexOf, 'function');
    });
});