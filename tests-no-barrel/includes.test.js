import { describe, it } from 'node:test';
import assert from 'assert';
import includes from 'lodash-es-with-subpaths/includes';

describe('includes', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof includes, function);
    });
});