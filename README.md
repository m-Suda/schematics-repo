# Scaffolding Tools

## 目次
- このツールについて
- 導入
- Schematicsを追加したい

## このツールについて
@angular-devkit/schematicsを利用したファイル自動生成ツールになります。

## 導入
### 1. 導入したいプロジェクトに必要なnpm packageをインストールする。
必要なpackageは以下。なお、既に入っているものは改めてインストールする必要は無い。<br>
**DevDependencies**に追加すること。
- @angular-devkit/core
- @angular-devkit/schematics
- @angular-devkit/schematics-cli
- commander
- typescript
- @types/node ※これが無いとBuildで失敗する
- @types/jest ※これが無いとBuildで失敗する

### 2. プロジェクトのルートに任意のディレクトリを作成する。
この自動ファイル生成ツールのソースコードを格納するために必要。<br>
作成したら`.gitignore`に作成したディレクトリを追加しておくこと。

### 3. 作成したディレクトリの中にこのリポジトリをクローンする。
説明不要

### 4. プロジェクトの`package.json`に`schematics`項目を追加する。
```json
{
  "schematics": "./<1で作成したディレクトリ>/schematics-repo/src/collection.json"
}
```

### 5. プロジェクトのpackage.jsonの`scripts`項目に以下のコマンドを追加する。
```json
{
    "scripts": {
      "schematics:build": "npx tsc -p <1で作成したディレクトリ>/schematics-repo",
      "schematics:generate": "node <1で作成したディレクトリ>/schematics-repo/bin/schematics-cli.js"
    }
}
```

### 6. Buildコマンドを実行する。
```shell script
$ npm run schematics:build
```
これで導入部分は終了

