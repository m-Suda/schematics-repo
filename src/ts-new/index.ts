import {
    apply,
    applyTemplates,
    chain,
    mergeWith,
    Rule,
    SchematicContext,
    Tree,
    url,
} from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { updatePackageJson } from './update-pacakge-json';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function createTsProject(): Rule {
    return chain([
        mergeWith(
            apply(url('./files'), [
                applyTemplates({
                    ...strings,
                    dot: '.',
                }),
            ])
        ),
        updatePackageJson(),
        (_: Tree, context: SchematicContext) => {
            context.addTask(new NodePackageInstallTask());
        },
    ]);
}
