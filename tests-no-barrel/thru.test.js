import { describe, it } from 'node:test';
import assert from 'assert';
import thru from 'lodash-es-with-subpaths/thru';

describe('thru', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof thru, function);
    });
});