import { SchematicsException, Tree } from '@angular-devkit/schematics';
import { PacakgeJsonType } from './pacakge-json';

export class PackageJson {
    constructor(private _packageJson: PacakgeJsonType) {
        if (!_packageJson) {
            throw new SchematicsException('Could not read package.json');
        }
    }

    /**
     * Package.jsonを読み込む
     * @param tree
     * @param packageJsonPath
     */
    public static read(tree: Tree, packageJsonPath = './package.json'): PacakgeJsonType {
        const content = tree.read(packageJsonPath);
        if (!content) {
            throw new SchematicsException('Could not read package.json');
        }
        return JSON.parse(content.toString()) as PacakgeJsonType;
    }

    /**
     * DevDependenciesに追加する
     * @param packageName
     * @param packageVersion
     */
    public addDevDependencies(packageName: string, packageVersion: string): void {
        const { devDependencies } = this._packageJson;
        const newDevDependencies = { ...devDependencies, [packageName]: packageVersion };
        this._packageJson = { ...this._packageJson, devDependencies: newDevDependencies };
    }

    /**
     * JSONオブジェクトをJSON文字列に変換する
     */
    public toJsonStringify(): string {
        return JSON.stringify(this._packageJson, null, 2);
    }
}
