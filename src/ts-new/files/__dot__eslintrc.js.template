module.exports = {
    extends: [
        'airbnb-base',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'prettier/@typescript-eslint',
    ],
    plugins: ['@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    rules: {
        // 戻り値の型指定が無い関数はを許可する。
        '@typescript-eslint/explicit-function-return-type': 'off',
        // 処理のないメソッドを許可する。
        '@typescript-eslint/no-empty-function': 'off',
        // @ts-ignoreコメントの使用を許可する
        '@typescript-eslint/ban-ts-ignore': 'off',
        // @ts-ignoreを許可する
        '@typescript-eslint/ban-ts-comment': 'off',
        // モジュール読み込みで、requireの使用を許可する。(jest.config.jsで必要であるため。)
        '@typescript-eslint/no-var-requires': 'off',
        // exportを許可する(default exportでないときのエラーを表示させない。)
        'import/prefer-default-export': 'off',
        // thisを使っていないメソッドがstaticでないことを許可する
        'class-methods-use-this': 'off',
        // importのpath指定で相対パスの使用を許可する。
        'import/no-unresolved': 'off',
        // 使用していないconstructorの存在を許可する。(AngularだとngOnInit()に処理書くため)
        'no-useless-constructor': 'off',
        // classのプロパティ一つ一つの間隔を開けないことを許可する。
        'lines-between-class-members': 'off',
        // 1ファイルに複数のclassを書くことを許可する。(base.form.tsで必要だったため)
        'max-classes-per-file': 'off',
        // console系の警告を外す。
        'no-console': 'off',
        // test.tsでimport 'jest-preset-angular'をするために許可。
        'import/no-extraneous-dependencies': 'off',
        // 定義されていない関数などの使用を許可(テストコードでエラーが多発したため。)
        'no-undef': 'off',
        // 変数名にアンダースコアを使用することを許可する。
        'no-underscore-dangle': 'off',
        // return awaitすることを許可する。
        'no-return-await': 'off',
        // returnでの割り当てを許可する。(setup-jest.tsでLinterエラーが出たため。)
        'no-return-assign': 'off',
        // ヨーダを許可する
        'yoda': 'off',
        // importにtsファイルも含める
        'import/extensions': 'off',
    },
};
