import { describe, it } from 'node:test';
import assert from 'assert';
import { camelCase } from 'lodash-es';

describe('camelCase', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof camelCase, function);
    });
});