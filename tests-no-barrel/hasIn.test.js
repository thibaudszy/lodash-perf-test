import { describe, it } from 'node:test';
import assert from 'assert';
import hasIn from 'lodash-es-with-subpaths/hasIn';

describe('hasIn', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof hasIn, function);
    });
});