// @ts-check

import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import tsdoc from 'eslint-plugin-tsdoc'

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    {
        languageOptions: {
          parserOptions: {
            project: true,
            tsconfigDirName: import.meta.dirname,
          },
        },
    },
    {
        files: ['*.js'],
        ...tseslint.configs.disableTypeChecked,
    },
    {
        plugins: {
            tsdoc
        },
        rules: {
            'tsdoc/syntax': 'warn'
        }
    },
);