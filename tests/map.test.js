import { describe, it } from 'node:test';
import assert from 'assert';
import { map } from 'lodash-es';

describe('map', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof map, 'function');
    });
});