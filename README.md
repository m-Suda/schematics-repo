# Scaffolding Tools

## 概要
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

### 2. プロジェクトのルートに任意のディレクトリを作成する。
この自動ファイル生成ツールのソースコードを格納するために必要。<br>
作成したら`.gitignore`に作成したディレクトリを追加しておくこと。

### 3. 作成したディレクトリの中にこのリポジトリをクローンする。
説明不要

### 4. プロジェクトのpackage.jsonの`scripts`項目に以下のコマンドを追加する。
