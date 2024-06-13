import { describe, it } from 'node:test';
import assert from 'assert';
import { reduceRight } from 'lodash-es';

describe('reduceRight', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof reduceRight, function);
    });
});