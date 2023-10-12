import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import reactJsxRuntime from 'eslint-plugin-react/configs/jsx-runtime.js'
import { FlatCompat } from '@eslint/eslintrc'
import typescriptParser from '@typescript-eslint/parser'

const compat = new FlatCompat({
    baseDirectory: path.dirname(fileURLToPath(import.meta.url))
})

/**
 * @type {Array<import('eslint').Linter.FlatConfig>}
 */
export default [
    {
        files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
        linterOptions: {
            reportUnusedDisableDirectives: true
        },
    },
    {
        ...js.configs.recommended,
        rules: {
            // [USE TS VERSION] Disallow unused variables
            'no-unused-vars': 'off',
            // Require the use of === and !==
            eqeqeq: 'warn',
            // Require template literals instead of string concatenation
            'prefer-template': 'warn',
            // Require or disallow method and property shorthand syntax for object literals
            'object-shorthand': 'warn',
            // Disallow the use of console
            'no-console': 'warn'
        }
    },
    ...compat.extends('plugin:react-hooks/recommended'),
    {
        ...reactJsxRuntime,
        settings: {
            react: {
                version: 'detect'
            }
        },
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        rules: {
            // Enforces consistent naming for boolean props
            'react/boolean-prop-naming': 'warn',
            // Enforce a specific function type for function components
            'react/function-component-definition': ['warn', {
                namedComponents: 'arrow-function',
                unnamedComponents: 'function-expression',
            }],
            // Ensure destructuring and symmetric naming of useState hook value and setter variables
            'react/hook-use-state': ['warn', {
                allowDestructuredState: true
            }],
            // Enforce boolean attributes notation in JSX
            'react/jsx-boolean-value': ['warn', 'never'],
            // Enforce closing bracket location in JSX
            'react/jsx-closing-bracket-location': 'warn',
            // Disallow usage of button elements without an explicit type attribute
            'react/button-has-type': 'warn',
            // Enforce maximum of props on a single line in JSX
            'react/jsx-max-props-per-line': ['warn', {
                maximum: 1
            }],
            // Enforce closing tag location for multiline JSX
            'react/jsx-closing-tag-location': 'warn',
            // Enforce proper position of the first property in JSX
            'react/jsx-first-prop-new-line': ['warn', 'multiline-multiprop'],
            // Enforce JSX indentation
            'react/jsx-indent': 'warn',
            // Enforce props indentation in JSX
            'react/jsx-indent-props': 'warn',
            // Disallow missing key props in iterators/collection literals
            'react/jsx-key': 'warn',
            // Require one JSX element per line
            'react/jsx-one-expression-per-line': 'warn',
            // Disallow extra closing tags for components without children
            'react/self-closing-comp': 'warn',
            // Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes
            'react/jsx-curly-brace-presence': ['warn', {
                props: 'never',
                propElementValues: 'always'
            }],
            // Disallow missing parentheses around multiline JSX
            'react/jsx-wrap-multilines': ['warn', {
                declaration: 'parens-new-line',
                assignment: 'parens-new-line',
                return: 'parens-new-line',
                arrow: 'parens-new-line',
                condition: 'parens-new-line',
                logical: 'parens-new-line',
                prop: 'parens-new-line',
            }]
        }
    },
    // TODO: remove compatibility mode after fixing https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/pull/891
    ...compat.extends('plugin:jsx-a11y/recommended'),
    {
        rules: {
            // Enforces using semantic DOM elements over the ARIA role property
            'jsx-a11y/prefer-tag-over-role': 'warn'
        }
    },
    // TODO: remove compatibility mode after fixing https://github.com/import-js/eslint-plugin-import/issues/2556
    ...compat.plugins('import'),
    {
        settings: {
            'import/internal-regex': '^(features|lib)/'
        },
        rules: {
            // Enforce a convention in module import order
            'import/order': ['warn', {
                groups: [
                    'external',
                    'internal',
                    [
                      'builtin',
                      'parent',
                      'sibling',
                      'index'
                    ],
                ],
                'newlines-between': 'ignore',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true
                },
            }],
        }
    },
    ...compat.plugins('newline-destructuring'),
    // Enforcing newlines in object destructuring assignment past a certain number of properties
    {
        rules: {
            'newline-destructuring/newline': ['warn', {
                items: 5,
                maxLength: 150
            }]
        }
    },
    // TODO: remove compatibility mode after fixing https://github.com/typescript-eslint/typescript-eslint/issues/7694
    ...compat.extends('plugin:@typescript-eslint/recommended'),
    {
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                project: './tsconfig.json',
                sourceType: 'module',
            }
        },
        rules: {
            // Disallow unused variables
            '@typescript-eslint/no-unused-vars': 'warn',
            // Require consistently using Array<T> for arrays.
            '@typescript-eslint/array-type': ['warn', {
                default: 'generic',
            }],
            // Enforce type definitions to consistently use type
            '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
            // Enforce using the nullish coalescing operator instead of logical assignments or chaining
            '@typescript-eslint/prefer-nullish-coalescing': 'warn',
            // Enforce using concise optional chain expressions instead of chained logical ands, negated logical ors, or empty objects
            '@typescript-eslint/prefer-optional-chain': 'warn',
            // Enforce using type parameter when calling Array#reduce instead of casting
            '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
            // Disallow returning a value with type any from a function
            '@typescript-eslint/no-unsafe-return': 'warn',
        }
    }
]