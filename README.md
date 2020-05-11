# Scaffolding Tools

## 目次
- このツールについて
- 導入
- Schematicsを追加したい

## このツールについて
@angular-devkit/schematicsを利用したファイル自動生成ツール。

## 導入
### 1. このリポジトリをクローンする。
導入したいプロジェクト以外のディレクトリが望ましい。<br>
クローン後、
```shell script
$ npm install
```
または
```shell script
$ npm ci
```
を実行して必要なpackageをインストールする。

### 2. npm modulesとして固める。
ソースコードのビルドをする。
```shell script
$ npm run build
```
その後npm moduleとして固める。
```shell script
$ npm pack
```
するとこのリポジトリにtgzファイルが作成される。

### 3. 導入したいプロジェクトに作成したmodulesを追加する。
導入したいプロジェクトのpackage.jsonがある階層で以下のコマンドを実行。
```shell script
$ npm add -D <2で作成したtgzファイルまでの相対パス>
```
(例)
```shell script
$ npm add -D ../schematics-repo/schematics-repo-1.0.0.tgz
```
こうするとローカルのnpm modulesをdevDependenciesに追加しつつインストールできる。

### 4. プロジェクトの`package.json`に`schematics`項目を追加する。
まずはSchematicsがどのcollection.jsonを参照するのかを指定する。
```json
{
  "schematics": "./<2で作成したディレクトリ>/schematics-repo/src/collection.json"
}
```

### 5. プロジェクトのpackage.jsonの`scripts`項目に実行コマンドを追加する。
(例)
```json
{
    "scripts": {
      "gen:ts-new": "schematics .:ts-new"
    }
}
```
構文としては
```shell script
{
    "scripts": {
      "gen:<適当なやつ>": "schematics .:<ここにcollection.jsonに追加したSchematicsを指定>"
    }
}
```

これで導入部分は終了
