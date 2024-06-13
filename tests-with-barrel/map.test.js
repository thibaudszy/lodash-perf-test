import { describe, it } from 'node:test';
import assert from 'assert';
import { map } from 'lodash-es';

describe('map', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof map, 'function');
    });
});