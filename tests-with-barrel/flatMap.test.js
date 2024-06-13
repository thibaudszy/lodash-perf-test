import { describe, it } from 'node:test';
import assert from 'assert';
import { flatMap } from 'lodash-es';

describe('flatMap', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof flatMap, 'function');
    });
});