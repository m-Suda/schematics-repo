import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import * as path from 'path';

const collectionPath = path.join(__dirname, '../collection.json');

describe('use-case', () => {
    test('works', () => {
        const runner = new SchematicTestRunner('schematics', collectionPath);
        const tree$ = runner.runSchematicAsync('ts-new', {}, Tree.empty());

        tree$.subscribe((tree) => {
            expect(tree.files).toEqual([]);
        });
    });
});
