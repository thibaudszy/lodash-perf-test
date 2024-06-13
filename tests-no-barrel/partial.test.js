import { describe, it } from 'node:test';
import assert from 'assert';
import partial from 'lodash-es-with-subpaths/partial';

describe('partial', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof partial, function);
    });
});