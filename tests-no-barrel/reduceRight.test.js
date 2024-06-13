import { describe, it } from 'node:test';
import assert from 'assert';
import reduceRight from 'lodash-es-with-subpaths/reduceRight';

describe('reduceRight', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof reduceRight, 'function');
    });
});