import {
    apply,
    applyTemplates,
    chain,
    mergeWith,
    move,
    Rule,
    SchematicContext,
    Tree,
    url,
} from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { TsNewClArcOptions } from './schema';
import { latestVersion } from './latest-version';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export default function (cliArgs: TsNewClArcOptions): Rule {
    const options = { ...cliArgs, directory: cliArgs.directory ?? cliArgs.name };
    return chain([
        mergeWith(
            apply(url('./files'), [
                applyTemplates({
                    ...strings,
                    ...options,
                    dot: '.',
                    latestVersion,
                }),
                move(options.name),
            ])
        ),
        (_: Tree, context: SchematicContext) => {
            context.addTask(
                new NodePackageInstallTask({
                    workingDirectory: options.directory,
                    packageManager: options.packageManager,
                })
            );
        },
    ]);
}
