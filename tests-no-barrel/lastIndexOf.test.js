import { describe, it } from 'node:test';
import assert from 'assert';
import lastIndexOf from 'lodash-es-with-subpaths/lastIndexOf';

describe('lastIndexOf', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof lastIndexOf, function);
    });
});