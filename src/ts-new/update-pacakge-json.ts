import { Rule, Tree } from '@angular-devkit/schematics';
import { PackageJson } from '../models/package-json';
import { latestVersion } from './latest-version';

export function updatePackageJson(): Rule {
    return (tree: Tree) => {
        const content = PackageJson.read(tree);
        const packageJson = new PackageJson(content);

        packageJson.addDevDependencies('typescript', latestVersion.TypeScript);
        packageJson.addDevDependencies('@types/jest', latestVersion.TypesJest);
        packageJson.addDevDependencies('@types/node', latestVersion.TypesNode);
        packageJson.addDevDependencies(
            '@typescript-eslint/eslint-plugin',
            latestVersion.TsEslintPlugin
        );
        packageJson.addDevDependencies('@typescript-eslint/parser', latestVersion.TsEsParser);
        packageJson.addDevDependencies('eslint', latestVersion.Eslint);
        packageJson.addDevDependencies(
            'eslint-config-airbnb-base',
            latestVersion.EslintConfigAirbnbBase
        );
        packageJson.addDevDependencies(
            'eslint-config-prettier',
            latestVersion.EslintConfigPrettier
        );
        packageJson.addDevDependencies('eslint-plugin-import', latestVersion.EslintPluginImport);
        packageJson.addDevDependencies(
            'eslint-plugin-prettier',
            latestVersion.EslintPluginPrettier
        );
        packageJson.addDevDependencies('jest', latestVersion.Jest);
        packageJson.addDevDependencies('prettier', latestVersion.Prettier);
        packageJson.addDevDependencies('ts-jest', latestVersion.TsJest);

        tree.overwrite('./package.json', packageJson.toJsonStringify());
        return tree;
    };
}
