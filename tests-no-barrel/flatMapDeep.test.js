import { describe, it } from 'node:test';
import assert from 'assert';
import flatMapDeep from 'lodash-es-with-subpaths/flatMapDeep';

describe('flatMapDeep', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof flatMapDeep, function);
    });
});